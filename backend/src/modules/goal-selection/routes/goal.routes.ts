import { Router } from 'express';
import { createGoal, listGoals, patchGoal, removeGoal } from '../controllers/goal.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { validateRequest } from '../../../middleware/validate.middleware';
import { createGoalSchema, updateGoalSchema } from '../schemas/goal.schemas';

export const goalRouter = Router();

goalRouter.post('/', authenticate, validateRequest(createGoalSchema), createGoal);
goalRouter.get('/', authenticate, listGoals);
goalRouter.patch('/:id', authenticate, validateRequest(updateGoalSchema), patchGoal);
goalRouter.delete('/:id', authenticate, removeGoal);
