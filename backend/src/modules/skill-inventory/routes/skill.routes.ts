import { Router } from 'express';
import { createSkillController, getSkillController, patchSkillController, deleteSkillController } from '../controllers/skill.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { validateRequest } from '../../../middleware/validate.middleware';
import { createSkillSchema, updateSkillSchema } from '../schemas/skill.schemas';

export const skillRouter = Router();

skillRouter.post('/', authenticate, validateRequest(createSkillSchema), createSkillController);
skillRouter.get('/', authenticate, getSkillController);
skillRouter.patch('/:id', authenticate, validateRequest(updateSkillSchema), patchSkillController);
skillRouter.delete('/:id', authenticate, deleteSkillController);
