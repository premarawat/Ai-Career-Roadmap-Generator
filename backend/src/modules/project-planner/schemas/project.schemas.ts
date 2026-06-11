import { z } from 'zod';

export const createProjectSchema = z.object({
  body: z.object({
    careerGoal: z.string().min(1),
    skillLevel: z.string().min(1),
    roadmapStage: z.string().min(1)
  })
});
