import { z } from 'zod';

export const gapAnalysisCreateSchema = z.object({
  body: z.object({
    currentSkills: z.array(z.string().min(1)),
    targetSkills: z.array(z.string().min(1))
  })
});

export const gapAnalysisIdSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  })
});
