import { Request, Response, NextFunction } from 'express';
import { createCareerGoal, getCareerGoals, updateCareerGoal, deleteCareerGoal } from '../services/goal.service';
import { sendCreated, sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const createGoal = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const goal = await createCareerGoal(req.user.id, req.body);
    return sendCreated(res, goal, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const listGoals = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const goals = await getCareerGoals(req.user.id);
    return sendSuccess(res, goals, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const patchGoal = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const goal = await updateCareerGoal(req.user.id, req.params.id, req.body);
    if (!goal) {
      return sendError(res, 'NOT_FOUND', 'Goal not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, goal, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const removeGoal = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const deleted = await deleteCareerGoal(req.user.id, req.params.id);
    if (!deleted) {
      return sendError(res, 'NOT_FOUND', 'Goal not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, { message: 'Goal deleted successfully' }, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
