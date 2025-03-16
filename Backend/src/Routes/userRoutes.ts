import { Router } from "express";
import userController from "../Controllers/user.controller";

const router = Router();

router.put('/updateBio', userController.updateBio)

export default router;
