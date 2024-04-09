import express from "express";
import dotenv from "dotenv";
import authRoutes from './Routes/AuthRoutes'
import messageRoutes from "./Routes/messageRoutes"
import connectToMongoDB from "./db/connectToMongo";

dotenv.config();
const app = express();
const PORT: any = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});