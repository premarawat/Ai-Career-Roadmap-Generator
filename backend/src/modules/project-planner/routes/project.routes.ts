import { Router } from 'express';
import { createProjectController, getProjectsController } from '../controllers/project.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { validateRequest } from '../../../middleware/validate.middleware';
import { createProjectSchema } from '../schemas/project.schemas';

export const projectRouter = Router();

projectRouter.post('/', authenticate, validateRequest(createProjectSchema), createProjectController);
projectRouter.get('/', authenticate, getProjectsController);
