import { Router } from 'express';
import { createProgressController, getProgressController, patchProgressController } from '../controllers/progress.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { validateRequest } from '../../../middleware/validate.middleware';
import { createProgressSchema, updateProgressSchema } from '../schemas/progress.schemas';

export const progressRouter = Router();

progressRouter.post('/', authenticate, validateRequest(createProgressSchema), createProgressController);
progressRouter.get('/', authenticate, getProgressController);
progressRouter.patch('/:id', authenticate, validateRequest(updateProgressSchema), patchProgressController);
