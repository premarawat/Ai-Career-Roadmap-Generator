import { z } from 'zod';

export const createSkillSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    level: z.string().min(1),
    category: z.string().optional(),
    evidenceUrl: z.string().url().optional()
  })
});

export const updateSkillSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    name: z.string().min(1).optional(),
    level: z.string().min(1).optional(),
    category: z.string().optional(),
    evidenceUrl: z.string().url().optional()
  })
});
