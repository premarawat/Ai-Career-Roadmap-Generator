import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser, logoutUser, refreshTokens, initiateForgotPassword, resetPassword, verifyEmailToken } from '../services/auth.service';
import { sendCreated, sendSuccess, sendError } from '../../common/helpers/response.helper';

export const register = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const tokens = await registerUser({
      ...req.body,
      createdBy: null
    });
    return sendCreated(res, tokens, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const tokens = await loginUser(req.body.email, req.body.password);
    return sendSuccess(res, tokens, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'User session not found', res.locals.requestId, [], 401);
    }
    await logoutUser(req.user.id);
    return sendSuccess(res, { message: 'Logged out successfully' }, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const refresh = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const tokens = await refreshTokens(req.body.refreshToken);
    return sendSuccess(res, tokens, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const forgotPassword = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const token = await initiateForgotPassword(req.body.email);
    return sendSuccess(res, { resetToken: token }, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const resetPasswordController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    await resetPassword(req.body.token, req.body.password);
    return sendSuccess(res, { message: 'Password reset successfully' }, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const verifyEmail = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    await verifyEmailToken(req.query.token as string);
    return sendSuccess(res, { message: 'Email verified successfully' }, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
