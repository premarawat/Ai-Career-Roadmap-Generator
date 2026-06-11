import { Request, Response, NextFunction } from 'express';
import { generateRoadmap, getRoadmap, updateRoadmap } from '../services/roadmap.service';
import { sendCreated, sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const generateRoadmapController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const roadmap = await generateRoadmap(req.user.id, req.body.careerGoal, req.body.currentSkills, req.body.targetSkills);
    return sendCreated(res, roadmap, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const getRoadmapController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const roadmap = await getRoadmap(req.user.id, req.params.id);
    if (!roadmap) {
      return sendError(res, 'NOT_FOUND', 'Roadmap not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, roadmap, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const patchRoadmapController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const roadmap = await updateRoadmap(req.user.id, req.params.id, req.body);
    if (!roadmap) {
      return sendError(res, 'NOT_FOUND', 'Roadmap not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, roadmap, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
