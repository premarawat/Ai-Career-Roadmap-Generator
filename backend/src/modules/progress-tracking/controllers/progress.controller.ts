import { Request, Response, NextFunction } from 'express';
import { createProgressUpdate, getProgressUpdates, updateProgressUpdate } from '../services/progress.service';
import { sendCreated, sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const createProgressController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const progress = await createProgressUpdate(req.user.id, req.body);
    return sendCreated(res, progress, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const getProgressController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const progress = await getProgressUpdates(req.user.id);
    return sendSuccess(res, progress, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const patchProgressController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const progress = await updateProgressUpdate(req.user.id, req.params.id, req.body);
    if (!progress) {
      return sendError(res, 'NOT_FOUND', 'Progress entry not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, progress, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
