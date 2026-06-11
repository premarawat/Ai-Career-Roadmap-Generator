import { Request, Response, NextFunction } from 'express';
import { logger } from '../logging/logger';
import { sendError } from '../common/helpers/response.helper';

export const errorMiddleware = (err: Error & { status?: number; code?: string; details?: unknown[] }, req: Request, res: Response, next: NextFunction): Response => {
  logger.error(err.stack ?? err.message);

  return sendError(
    res,
    err.code ?? 'INTERNAL_SERVER_ERROR',
    err.message ?? 'An unexpected error occurred',
    res.locals.requestId ?? '',
    err.details ?? [],
    err.status ?? 500
  );
};
