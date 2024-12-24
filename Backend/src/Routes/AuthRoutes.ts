import { Router } from 'express';
import authController from '../Controllers/auth.controller';

const router = Router();

router.post('/SignUp', authController.signup);

router.post('/SignIn', authController.signin);

router.get('/LogOut', authController.logout);

export default router;