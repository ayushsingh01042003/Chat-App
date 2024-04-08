import { Router } from "express";
import messagesController from "../Controllers/messages.controller";
import authMiddleware from "../middleware/jwtAuth";

const router = Router();

router.post('/send/:recieverId', authMiddleware, messagesController.sendMessage);

export default router;