import { z } from 'zod';

export const updateNotificationReadSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  })
});
