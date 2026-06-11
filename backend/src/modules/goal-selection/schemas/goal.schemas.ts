import { z } from 'zod';

export const createGoalSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    targetRole: z.string().min(1),
    timeline: z.string().min(1)
  })
});

export const updateGoalSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    title: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    targetRole: z.string().min(1).optional(),
    timeline: z.string().min(1).optional()
  })
});
