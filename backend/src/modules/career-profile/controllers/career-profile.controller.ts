import { Request, Response, NextFunction } from 'express';
import { createOrUpdateProfile, getProfileByUserId } from '../services/career-profile.service';
import { sendCreated, sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const createCareerProfile = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }
    const profile = await createOrUpdateProfile(req.user.id, req.body);
    return sendCreated(res, profile, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const fetchCareerProfile = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }
    const profile = await getProfileByUserId(req.user.id);
    return sendSuccess(res, profile, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const patchCareerProfile = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }
    const profile = await createOrUpdateProfile(req.user.id, req.body);
    return sendSuccess(res, profile, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
