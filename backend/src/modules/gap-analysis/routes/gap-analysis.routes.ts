import { Router } from 'express';
import { createGapAnalysisController, getGapAnalysisController } from '../controllers/gap-analysis.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { validateRequest } from '../../../middleware/validate.middleware';
import { gapAnalysisCreateSchema, gapAnalysisIdSchema } from '../schemas/gap-analysis.schemas';

export const gapAnalysisRouter = Router();

gapAnalysisRouter.post('/', authenticate, validateRequest(gapAnalysisCreateSchema), createGapAnalysisController);
gapAnalysisRouter.get('/:id', authenticate, validateRequest(gapAnalysisIdSchema), getGapAnalysisController);
