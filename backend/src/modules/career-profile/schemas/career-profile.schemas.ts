import { z } from 'zod';

export const careerProfileSchema = z.object({
  body: z.object({
    education: z.array(
      z.object({
        institution: z.string().min(1),
        degree: z.string().min(1),
        field: z.string().min(1),
        startYear: z.number().int(),
        endYear: z.number().int().optional()
      })
    ),
    skills: z.array(z.object({ name: z.string().min(1), level: z.string().min(1) })),
    certifications: z.array(
      z.object({
        name: z.string().min(1),
        issuer: z.string().min(1),
        earnedAt: z.string().transform((value) => new Date(value)),
        evidenceUrl: z.string().url().optional()
      })
    ),
    interests: z.array(z.string().min(1)),
    experience: z.array(
      z.object({
        company: z.string().min(1),
        role: z.string().min(1),
        duration: z.string().min(1),
        description: z.string().optional()
      })
    )
  })
});
