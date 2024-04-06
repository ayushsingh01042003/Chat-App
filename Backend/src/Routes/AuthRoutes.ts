import { Router } from 'express';
import authController from '../Controllers/auth.controller';

const router = Router();

router.get('/SignUp', authController.SignUp);

router.post('/SignIn', authController.SignIn);

router.post('/LogOut', authController.LogOut);

export default router;