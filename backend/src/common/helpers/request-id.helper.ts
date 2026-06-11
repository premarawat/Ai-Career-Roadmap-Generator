import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { env } from '../../config/env';

export const requestIdMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const requestId = req.headers[env.requestIdHeader] as string | undefined ?? uuidv4();
  res.locals.requestId = requestId;
  req.headers[env.requestIdHeader] = requestId;
  next();
};
