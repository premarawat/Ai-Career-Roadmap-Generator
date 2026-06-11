import { Router } from 'express';
import { generateRoadmapController, getRoadmapController, patchRoadmapController } from '../controllers/roadmap.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { validateRequest } from '../../../middleware/validate.middleware';
import { createRoadmapSchema, roadmapIdSchema, updateRoadmapSchema } from '../schemas/roadmap.schemas';

export const roadmapRouter = Router();

roadmapRouter.post('/generate', authenticate, validateRequest(createRoadmapSchema), generateRoadmapController);
roadmapRouter.get('/:id', authenticate, validateRequest(roadmapIdSchema), getRoadmapController);
roadmapRouter.patch('/:id', authenticate, validateRequest(updateRoadmapSchema), patchRoadmapController);
