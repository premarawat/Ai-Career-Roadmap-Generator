import { Request, Response, NextFunction } from 'express';
import { getUsers, updateUser, removeUser } from '../services/admin.service';
import { getAuditEvents, getAnalyticsEvents } from '../services/admin.service';
import { sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const getUsersController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const users = await getUsers();
    return sendSuccess(res, users, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const patchUserController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const user = await updateUser(req.params.id, req.body, req.user?.id ?? null);
    if (!user) {
      return sendError(res, 'NOT_FOUND', 'User not found', res.locals.requestId, [], 404);
    }
    return sendSuccess(res, user, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const deleteUserController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const deleted = await removeUser(req.params.id);
    if (!deleted) {
      return sendError(res, 'NOT_FOUND', 'User not found', res.locals.requestId, [], 404);
    }
    return sendSuccess(res, { message: 'User deleted' }, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const getAuditEventsController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const events = await getAuditEvents();
    return sendSuccess(res, events, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const getAnalyticsController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const events = await getAnalyticsEvents();
    return sendSuccess(res, events, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
