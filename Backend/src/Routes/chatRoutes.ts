import { Router } from "express";
import chatController from "../Controllers/chat.controller";

const router = Router();

router.post('/createSoloChat', chatController.createSoloChat);
router.post('/createGroupChat', chatController.createGroupChat);
router.put('/addUserToChat', chatController.addUsersToChat);
router.delete('/deleteChat/:id', chatController.deleteChat);

export default router;