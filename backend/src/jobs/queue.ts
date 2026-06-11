import { Queue, Worker, QueueScheduler } from 'bullmq';
import { redisClient } from '../config/redis';
import { logger } from '../logging/logger';

export const roadmapQueue = new Queue('roadmap-generation', { connection: redisClient as unknown as any });
export const notificationQueue = new Queue('notifications', { connection: redisClient as unknown as any });
export const analyticsQueue = new Queue('analytics', { connection: redisClient as unknown as any });

new QueueScheduler('roadmap-generation', { connection: redisClient as unknown as any });
new QueueScheduler('notifications', { connection: redisClient as unknown as any });
new QueueScheduler('analytics', { connection: redisClient as unknown as any });

export const roadmapWorker = new Worker(
  'roadmap-generation',
  async (job) => {
    logger.info(`Processing roadmap job ${job.id}`);
    return job.data;
  },
  { connection: redisClient as unknown as any }
);

export const notificationWorker = new Worker(
  'notifications',
  async (job) => {
    logger.info(`Processing notification job ${job.id}`);
    return job.data;
  },
  { connection: redisClient as unknown as any }
);

export const analyticsWorker = new Worker(
  'analytics',
  async (job) => {
    logger.info(`Processing analytics job ${job.id}`);
    return job.data;
  },
  { connection: redisClient as unknown as any }
);
