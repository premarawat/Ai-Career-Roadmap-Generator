import { ZodError } from 'zod';

export const formatZodError = (error: ZodError): { code: string; message: string; details: unknown[] } => {
  return {
    code: 'VALIDATION_ERROR',
    message: 'Input validation failed',
    details: error.errors.map((issue) => ({ path: issue.path.join('.'), message: issue.message }))
  };
};
