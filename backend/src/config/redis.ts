import { createClient } from 'redis';
import { env } from './env';

export const redisClient = createClient({
  socket: {
    host: env.redis.host,
    port: env.redis.port
  },
  password: env.redis.password
});

export const connectRedis = async (): Promise<void> => {
  redisClient.on('error', (error) => {
    console.error('Redis client error', error);
  });

  await redisClient.connect();
};
