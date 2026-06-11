import { Request, Response, NextFunction } from 'express';
import { createProjectRecommendation, getProjectRecommendations } from '../services/project.service';
import { sendCreated, sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const createProjectController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const project = await createProjectRecommendation(req.user.id, req.body.careerGoal, req.body.skillLevel, req.body.roadmapStage);
    return sendCreated(res, project, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const getProjectsController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const projects = await getProjectRecommendations(req.user.id);
    return sendSuccess(res, projects, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
