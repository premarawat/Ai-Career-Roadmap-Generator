import { Router } from 'express';
import { createMentorReviewController, getMentorReviewController, patchMentorReviewController } from '../controllers/mentor-review.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { validateRequest } from '../../../middleware/validate.middleware';
import { createMentorReviewSchema, updateMentorReviewSchema } from '../schemas/mentor-review.schemas';

export const mentorReviewRouter = Router();

mentorReviewRouter.post('/', authenticate, validateRequest(createMentorReviewSchema), createMentorReviewController);
mentorReviewRouter.get('/', authenticate, getMentorReviewController);
mentorReviewRouter.patch('/:id', authenticate, validateRequest(updateMentorReviewSchema), patchMentorReviewController);
