"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsWorker = exports.notificationWorker = exports.roadmapWorker = exports.analyticsQueue = exports.notificationQueue = exports.roadmapQueue = void 0;
const bullmq_1 = require("bullmq");
const redis_1 = require("../config/redis");
const logger_1 = require("../logging/logger");
exports.roadmapQueue = new bullmq_1.Queue('roadmap-generation', { connection: redis_1.redisClient });
exports.notificationQueue = new bullmq_1.Queue('notifications', { connection: redis_1.redisClient });
exports.analyticsQueue = new bullmq_1.Queue('analytics', { connection: redis_1.redisClient });
new bullmq_1.QueueScheduler('roadmap-generation', { connection: redis_1.redisClient });
new bullmq_1.QueueScheduler('notifications', { connection: redis_1.redisClient });
new bullmq_1.QueueScheduler('analytics', { connection: redis_1.redisClient });
exports.roadmapWorker = new bullmq_1.Worker('roadmap-generation', async (job) => {
    logger_1.logger.info(`Processing roadmap job ${job.id}`);
    return job.data;
}, { connection: redis_1.redisClient });
exports.notificationWorker = new bullmq_1.Worker('notifications', async (job) => {
    logger_1.logger.info(`Processing notification job ${job.id}`);
    return job.data;
}, { connection: redis_1.redisClient });
exports.analyticsWorker = new bullmq_1.Worker('analytics', async (job) => {
    logger_1.logger.info(`Processing analytics job ${job.id}`);
    return job.data;
}, { connection: redis_1.redisClient });
//# sourceMappingURL=queue.js.map