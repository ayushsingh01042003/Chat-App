import { Router } from "express";
import authMiddleware from "../middleware/jwtAuth";
import chatController from "../Controllers/chat.controller";

const router = Router();

router.post('/createSoloChat', authMiddleware, chatController.createSoloChat);
router.post('/createGroupChat', authMiddleware, chatController.createGroupChat);
router.put('/addUserToChat', authMiddleware, chatController.addUsersToChat);
router.delete('/deleteChat/:id', authMiddleware, chatController.deleteChat);

export default router;