import { Request, Response, NextFunction } from 'express';
import { createSkill, getSkills, updateSkill, deleteSkill } from '../services/skill.service';
import { sendCreated, sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const createSkillController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const skill = await createSkill(req.user.id, req.body);
    return sendCreated(res, skill, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const getSkillController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const skills = await getSkills(req.user.id);
    return sendSuccess(res, skills, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const patchSkillController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const skill = await updateSkill(req.user.id, req.params.id, req.body);
    if (!skill) {
      return sendError(res, 'NOT_FOUND', 'Skill not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, skill, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const deleteSkillController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const removed = await deleteSkill(req.user.id, req.params.id);
    if (!removed) {
      return sendError(res, 'NOT_FOUND', 'Skill not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, { message: 'Skill removed' }, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
