import express, {Request, Response} from "express";
import dotenv from "dotenv";
import authRoutes from './Routes/AuthRoutes'
import connectToMongoDB from "./db/connectToMongo";

dotenv.config();
const app = express();
const PORT: any = process.env.PORT || 3000;

app.use('/api/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello TS');
});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});