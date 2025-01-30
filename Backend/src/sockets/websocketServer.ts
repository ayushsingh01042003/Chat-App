import { WebSocket, WebSocketServer } from "ws";
import { Server } from "http";
import prisma from "../utils";
import jwt from "jsonwebtoken";
import { IncomingMessage } from "http";

const createWebSocketServer = (server: Server) => {
    const wss = new WebSocketServer({ server });
    const connectedUsers = new Map<string, WebSocket>();

    wss.on('connection', async (ws: WebSocket, req: IncomingMessage) => {
        try {
            const cookieHeader = req.headers.cookie;
            if (!cookieHeader) {
                ws.close(1008, 'Unauthorized: No cookie header');
                return;
            }

            const jwtToken = cookieHeader.split('jwt=')[1];
            if (!jwtToken) {
                ws.close(1008, 'Unauthorized: Missing token');
                return;
            }
    
            const decodedUser = jwt.verify(jwtToken, process.env.JWT_SECRET as string);
            
            if (typeof decodedUser === "string") {
                ws.close(1008, 'Unauthorized: Invalid token');
                return;
            }
    
            const userId = decodedUser.user_id;
            if (!userId) {
                ws.close(1008, 'Unauthorized: Missing user ID');
                return;
            }

            connectedUsers.set(userId.toString(), ws);
            console.log(`User ${userId} connected`);
            
            // Send undelivered messages on connecting
            const undeliveredMessages = await prisma.message.findMany({
                where: {
                    delivered: false,
                    chat: {
                        chat_users: {
                            some: {
                                user_id: parseInt(userId)
                            }
                        }
                    }
                }
            });
    
            undeliveredMessages.forEach(async (message) => {
                ws.send(JSON.stringify(message));
                await prisma.message.update({
                    where: { message_id: message.message_id },
                    data: { delivered: true }
                });
            });
    
            // Handle incoming messages
            ws.on('message', async (data) => {
                try {
                    const { chatId, messageContent } = JSON.parse(data.toString());
                    
                    const newMessage = await prisma.message.create({
                        data: { 
                            chat_id: parseInt(chatId), 
                            message_content: messageContent, 
                            sender_id: parseInt(userId)
                        },
                    });
    
                    const chatParticipants = await prisma.chat_User.findMany({
                        where: { chat_id: parseInt(chatId) },
                        select: { user_id: true }
                    });
    
                    chatParticipants.forEach(async ({ user_id }) => {
                        const client = connectedUsers.get(user_id.toString());
                        if (client) {
                            client.send(JSON.stringify(newMessage));
                            await prisma.message.update({
                                where: { message_id: newMessage.message_id },
                                data: { delivered: true }
                            });
                        }
                    });
                } catch (error) {
                    console.error('Error processing message:', error);
                    ws.send(JSON.stringify({ error: 'Failed to process message' }));
                }
            });
    
            ws.on('close', () => {
                connectedUsers.delete(userId.toString());
                console.log(`Connection closed for user ${userId}`);
            });
    
        } catch (error) {
            console.error('WebSocket connection error:', error);
            ws.close(1008, 'Connection error occurred');
        }
    });

    return wss;
}

export default createWebSocketServer;