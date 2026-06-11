import { Request, Response, NextFunction } from 'express';
import { createGapAnalysis, getGapAnalysisById } from '../services/gap-analysis.service';
import { sendCreated, sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const createGapAnalysisController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const analysis = await createGapAnalysis(req.user.id, req.body.currentSkills, req.body.targetSkills);
    return sendCreated(res, analysis, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const getGapAnalysisController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const analysis = await getGapAnalysisById(req.user.id, req.params.id);
    if (!analysis) {
      return sendError(res, 'NOT_FOUND', 'Gap analysis not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, analysis, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
