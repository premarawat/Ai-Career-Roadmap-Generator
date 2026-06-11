import { Router } from 'express';
import { register, login, logout, refresh, forgotPassword, resetPasswordController, verifyEmail } from '../controllers/auth.controller';
import { validateRequest } from '../../middleware/validate.middleware';
import { authenticate } from '../../middleware/auth.middleware';
import {
  registerSchema,
  loginSchema,
  refreshTokenSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyEmailSchema
} from '../schemas/auth.schemas';

export const authRouter = Router();

authRouter.post('/register', validateRequest(registerSchema), register);
authRouter.post('/login', validateRequest(loginSchema), login);
authRouter.post('/logout', authenticate, logout);
authRouter.post('/refresh', validateRequest(refreshTokenSchema), refresh);
authRouter.post('/forgot-password', validateRequest(forgotPasswordSchema), forgotPassword);
authRouter.post('/reset-password', validateRequest(resetPasswordSchema), resetPasswordController);
authRouter.get('/verify-email', validateRequest(verifyEmailSchema), verifyEmail);
