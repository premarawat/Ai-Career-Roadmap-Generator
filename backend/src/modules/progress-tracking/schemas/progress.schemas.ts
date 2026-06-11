import { z } from 'zod';

export const createProgressSchema = z.object({
  body: z.object({
    completedSkills: z.array(z.string().min(1)),
    completedMilestones: z.array(z.string().min(1)),
    completedProjects: z.array(z.string().min(1)),
    completedCertifications: z.array(z.string().min(1))
  })
});

export const updateProgressSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    completedSkills: z.array(z.string().min(1)).optional(),
    completedMilestones: z.array(z.string().min(1)).optional(),
    completedProjects: z.array(z.string().min(1)).optional(),
    completedCertifications: z.array(z.string().min(1)).optional()
  })
});
