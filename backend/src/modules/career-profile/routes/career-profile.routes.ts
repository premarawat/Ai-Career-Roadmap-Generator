import { Router } from 'express';
import { createCareerProfile, fetchCareerProfile, patchCareerProfile } from '../controllers/career-profile.controller';
import { authenticate } from '../../../middleware/auth.middleware';
import { validateRequest } from '../../../middleware/validate.middleware';
import { careerProfileSchema } from '../schemas/career-profile.schemas';

export const careerProfileRouter = Router();

careerProfileRouter.post('/', authenticate, validateRequest(careerProfileSchema), createCareerProfile);
careerProfileRouter.get('/', authenticate, fetchCareerProfile);
careerProfileRouter.patch('/', authenticate, validateRequest(careerProfileSchema), patchCareerProfile);
