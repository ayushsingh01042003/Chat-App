import { Router } from 'express';
import authController from '../Controllers/auth.controller';

const router = Router();

router.post('/SignUp', authController.SignUp);

router.post('/SignIn', authController.SignIn);

router.get('/LogOut', authController.LogOut);

export default router;