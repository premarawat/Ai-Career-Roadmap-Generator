import { app } from './app';
import { connectDatabase } from './config/db';
import { logger } from './logging/logger';
import { env } from './config/env';

const startServer = async (): Promise<void> => {
  try {
    await connectDatabase();
    logger.info('MongoDB connected');

    app.listen(env.port, () => {
      logger.info(`Server listening on http://localhost:${env.port}`);
    });
  } catch (error) {
    logger.error('Failed to start application', error as Error);
    process.exit(1);
  }
};

startServer();
