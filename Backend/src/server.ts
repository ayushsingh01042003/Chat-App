import express, { Express, RequestHandler} from "express";
import authRoutes from './Routes/AuthRoutes'
// import messageRoutes from "./Routes/messageRoutes"
import userRoutes from './Routes/userRoutes';
import chatRoutes from './Routes/chatRoutes'
import cors from 'cors';
import cookieParser from "cookie-parser";
import createWebSocketServer from "./sockets/websocketServer";
import promBundle from 'express-prom-bundle';
import authMiddleware from "./middleware/jwtAuth";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string) || 3000;
const metricsMiddleware = promBundle({ includeMethod: true }) as unknown as RequestHandler;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use(metricsMiddleware);
app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/chats', authMiddleware, chatRoutes);
// app.use('/api/messages', messageRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

createWebSocketServer(server);