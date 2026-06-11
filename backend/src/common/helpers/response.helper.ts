import { Response } from 'express';
import { ApiResponse } from '../types/response';

export const sendSuccess = <T>(res: Response, data: T, requestId: string): Response => {
  const payload: ApiResponse<T> = {
    data,
    meta: {
      requestId,
      timestamp: new Date().toISOString()
    },
    error: null
  };

  return res.status(200).json(payload);
};

export const sendCreated = <T>(res: Response, data: T, requestId: string): Response => {
  const payload: ApiResponse<T> = {
    data,
    meta: {
      requestId,
      timestamp: new Date().toISOString()
    },
    error: null
  };

  return res.status(201).json(payload);
};

export const sendError = (
  res: Response,
  code: string,
  message: string,
  requestId: string,
  details: unknown[] = [],
  status = 400
): Response => {
  const payload: ApiResponse<null> = {
    data: null,
    meta: {
      requestId,
      timestamp: new Date().toISOString()
    },
    error: {
      code,
      message,
      details
    }
  };

  return res.status(status).json(payload);
};
