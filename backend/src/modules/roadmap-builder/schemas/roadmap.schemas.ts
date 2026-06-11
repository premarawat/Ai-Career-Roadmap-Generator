import { z } from 'zod';

export const createRoadmapSchema = z.object({
  body: z.object({
    careerGoal: z.string().min(1),
    currentSkills: z.array(z.string().min(1)),
    targetSkills: z.array(z.string().min(1))
  })
});

export const roadmapIdSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  })
});

export const updateRoadmapSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    milestones: z.array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        dueWeek: z.number().int(),
        completed: z.boolean()
      })
    ).optional(),
    projectRecommendations: z.array(z.string()).optional()
  })
});
