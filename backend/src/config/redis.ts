// Redis is disabled — stub exported so existing imports don't break at compile time.
// Re-enable by installing Redis locally and restoring the real implementation.

export const redisClient = null;

export const connectRedis = async (): Promise<void> => {
  // No-op: Redis is not configured in this environment
};
