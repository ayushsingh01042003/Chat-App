import express, { Express } from "express";
import authRoutes from './Routes/AuthRoutes'
import messageRoutes from "./Routes/messageRoutes"
import connectToMongoDB from "./db/connectToMongo";
import userRoutes from './Routes/userRoutes';
import cors from 'cors';

const app: Express = express();
const PORT: number = parseInt(process.env.PORT as string) || 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});