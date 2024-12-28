import { Request, Response } from "express";
import prisma from "../utils";

class ChatController {
    async createSoloChat(req: Request, res: Response) {
        const { recieverEmail } = req.body;
        const sender = res.locals.currUser;

        const reciever = await prisma.user.findUnique({
            where: {
                email: recieverEmail
            }
        });

        if(!reciever) {
            return res
                    .status(404)
                    .json({
                        msg: 'user email not found'
                    });
        }

        const chat = await prisma.chat.create({
            data: {
                type: 'PERSONAL',
                chat_users: {
                    create: [
                        { user_id: sender.user_id },
                        { user_id: reciever.user_id }
                    ]
                }
            }
        })

        return res
                .status(201)
                .json(chat);
    }

    async createGroupChat(req: Request, res: Response) {
        const { emails } = req.body;

        const users = await prisma.user.findMany({
            where: {
                email: {
                    in: emails
                }
            }
        });

        if(users.length !== emails.length) {
            return res
                    .status(404)
                    .json({
                        msg: "Some users not found" 
                    })
        }

        const chat = await prisma.chat.create({
            data: {
                type: 'GROUP',
                chat_users: {
                    create: users.map(user => ({
                        user_id: user.user_id
                    }))
                }
            }
        });

        return res
                .status(201)
                .json(chat);
    }

    async addUsersToChat(req: Request, res: Response) {
        const { emails, chat_id } = req.body;

        const users = await prisma.user.findMany({
            where: {
                email: {
                    in: emails
                }
            }
        });

        if(users.length !== emails.length) {
            return res
                    .status(404)
                    .json({
                        msg: "Some users not found" 
                    })
        }

        const updatedChat = await prisma.chat.update({
            where: {
                chat_id,
            },
            data: {
                chat_users: {
                    create: users.map(user => ({
                        user_id: user.user_id
                    }))
                }
            }
        });

        return res
                .status(201)
                .json(updatedChat);
    }

    async deleteChat(req: Request, res: Response) {
        const { chat_id } = req.body;

        const deletedChat = await prisma.chat.delete({
            where: {
                chat_id,
            }
        });

        return res
                .status(204)
                .json(deletedChat);
    }
}

export default new ChatController();