import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import { sendError } from '../common/helpers/response.helper';

export const validateRequest = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse({
      body: req.body,
      query: req.query,
      params: req.params
    });

    if (!result.success) {
      const errors = result.error.errors.map((issue) => ({ path: issue.path.join('.'), message: issue.message }));
      sendError(res, 'VALIDATION_ERROR', 'Request validation failed', res.locals.requestId ?? '', errors, 422);
      return;
    }

    Object.assign(req, result.data);
    next();
  };
};
