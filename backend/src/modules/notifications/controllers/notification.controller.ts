import { Request, Response, NextFunction } from 'express';
import { getNotificationsForUser, markNotificationRead } from '../services/notification.service';
import { sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const getNotificationsController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const notifications = await getNotificationsForUser(req.user.id);
    return sendSuccess(res, notifications, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const patchNotificationReadController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const notification = await markNotificationRead(req.user.id, req.params.id);
    if (!notification) {
      return sendError(res, 'NOT_FOUND', 'Notification not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, notification, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
