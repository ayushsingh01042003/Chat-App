import { WebSocketServer } from "ws";
import { Server } from "http";

const createWebSocketServer = (server: Server) => {
    const wss = new WebSocketServer({ server });
    let currNumOfUsers: number = 0;
    
    wss.on('connection', function connection(ws) {
        currNumOfUsers++;
        ws.on('error', console.error);
      
        ws.on('message', function message(data) {
            console.log('received: %s', data);
        });

        ws.on('close', () => {
            console.log(`connection closed`);
            currNumOfUsers--;
            console.log(currNumOfUsers);
        })

        console.log(`number of connected: ${currNumOfUsers}`);
        ws.send('Message from websocket server');
    });

    return wss;
}

export default createWebSocketServer;