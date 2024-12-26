import { Router } from "express";
import authMiddleware from "../middleware/jwtAuth";
import userController from "../Controllers/user.controller";

const router = Router();

router.put('/updateBio', authMiddleware, userController.updateBio)

export default router;
