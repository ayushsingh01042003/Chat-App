import { WebSocketServer } from "ws";
import { Server } from "http";

const createWebSocketServer = (server: Server) => {
    const wss = new WebSocketServer({ server });
    let currNumOfUsers: number = 0;
    
    wss.on('connection', (client) => {
        currNumOfUsers++;
        client.on('error', console.error);
      
        client.on('message', (data, isBinary) => {
            
        });

        client.on('close', () => {
            console.log(`connection closed`);
            currNumOfUsers--;
            console.log(currNumOfUsers);
        })

        console.log(`number of connected: ${currNumOfUsers}`);
        client.send('Message from websocket server');
    });

    return wss;
}

export default createWebSocketServer;