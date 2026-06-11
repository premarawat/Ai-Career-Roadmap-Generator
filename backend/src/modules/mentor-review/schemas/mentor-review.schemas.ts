import { z } from 'zod';

export const createMentorReviewSchema = z.object({
  body: z.object({
    mentorId: z.string().min(1),
    roadmapId: z.string().min(1),
    comment: z.string().min(1),
    feedback: z.string().min(1)
  })
});

export const updateMentorReviewSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    feedback: z.string().min(1).optional(),
    status: z.enum(['pending', 'approved', 'rejected']).optional(),
    statusReason: z.string().optional()
  })
});
