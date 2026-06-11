import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { sendError } from '../common/helpers/response.helper';
import { UserPayload } from '../auth/types/auth.types';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ') ? authHeader.replace('Bearer ', '') : undefined;

  if (!token) {
    sendError(res, 'UNAUTHORIZED', 'Authorization header missing', res.locals.requestId ?? '', [], 401);
    return;
  }

  try {
    const payload = jwt.verify(token, env.jwtAccessSecret) as UserPayload;
    req.user = payload;
    next();
  } catch (error) {
    sendError(res, 'UNAUTHORIZED', 'Invalid or expired token', res.locals.requestId ?? '', [], 401);
    return;
  }
};
