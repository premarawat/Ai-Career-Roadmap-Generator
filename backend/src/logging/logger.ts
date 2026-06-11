import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize, errors } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack ?? message}`;
});

export const logger = createLogger({
  level: 'info',
  format: combine(
    colorize({ all: true }),
    timestamp(),
    errors({ stack: true }),
    logFormat
  ),
  transports: [new transports.Console()]
});
