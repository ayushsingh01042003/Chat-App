import express, { Express } from "express";
import authRoutes from './Routes/AuthRoutes'
// import messageRoutes from "./Routes/messageRoutes"
// import userRoutes from './Routes/userRoutes';
import cors from 'cors';
import cookieParser from "cookie-parser";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string) || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});