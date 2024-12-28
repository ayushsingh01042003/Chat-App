import { Router } from "express";
import authMiddleware from "../middleware/jwtAuth";

const router = Router();

router.post('/createSoloChat', authMiddleware)
router.post('/createGroupChat', authMiddleware)
router.put('/addUserToChat', authMiddleware)
router.delete('/deleteChat/:id', authMiddleware)

export default router;