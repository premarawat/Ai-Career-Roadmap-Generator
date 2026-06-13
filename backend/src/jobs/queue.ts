import { logger } from '../logging/logger';

// Background queues are disabled — Redis not configured.
// These are stub exports so any existing import of queue.ts compiles without error.

export const roadmapQueue = null;
export const notificationQueue = null;
export const analyticsQueue = null;

export const roadmapWorker = null;
export const notificationWorker = null;
export const analyticsWorker = null;

logger.info('Background job queues are disabled (Redis not configured).');
