import { WebSocketServer } from "ws";
import { Server } from "http";

const createWebSocketServer = (server: Server) => {
    const wss = new WebSocketServer({ server })
    wss.on('connection', function connection(ws) {
        ws.on('error', console.error);
      
        ws.on('message', function message(data) {
            console.log('received: %s', data);
        });
      
        console.log('connected to ws server');
        ws.send('Message from websocket server');
    });

    return wss;
}

export default createWebSocketServer;