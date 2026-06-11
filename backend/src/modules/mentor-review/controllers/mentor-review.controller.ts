import { Request, Response, NextFunction } from 'express';
import { createMentorReview, getMentorReviews, updateMentorReview } from '../services/mentor-review.service';
import { sendCreated, sendSuccess, sendError } from '../../../common/helpers/response.helper';

export const createMentorReviewController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const review = await createMentorReview(req.user.id, req.body);
    return sendCreated(res, review, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const getMentorReviewController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const reviews = await getMentorReviews(req.user.id);
    return sendSuccess(res, reviews, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};

export const patchMentorReviewController = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.user) {
      return sendError(res, 'UNAUTHORIZED', 'Authentication required', res.locals.requestId, [], 401);
    }

    const review = await updateMentorReview(req.user.id, req.params.id, req.body);
    if (!review) {
      return sendError(res, 'NOT_FOUND', 'Mentor review not found', res.locals.requestId, [], 404);
    }

    return sendSuccess(res, review, res.locals.requestId);
  } catch (error) {
    return next(error as Error);
  }
};
