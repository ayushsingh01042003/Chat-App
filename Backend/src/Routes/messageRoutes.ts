import { Router } from "express";
import messagesController from "../Controllers/messages.controller";
import authMiddleware from "../middleware/jwtAuth";

const router = Router();

router.get('/get/:recieverId', authMiddleware, messagesController.getConversation);
router.post('/send/:recieverId', authMiddleware, messagesController.sendMessage);

export default router;