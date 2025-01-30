import { Router } from 'express';
import authController from '../Controllers/auth.controller';

const router = Router();

router.post('/signup', authController.signup);

router.post('/signin', authController.signin);

router.get('/logout', authController.logout);

router.get('/verify-user', authController.verifyUser);

export default router;