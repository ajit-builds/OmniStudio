import type { ErrorRequestHandler } from 'express';
import { env } from '../config/env.js';

// Centralized error handling middleware
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  const isProd = env.NODE_ENV === 'production';
  const safeMessage =
    statusCode === 500 && isProd ? 'An unexpected internal server error occurred.' : message;

  const response: {
    error: {
      code: string;
      message: string;
      stack?: string;
    };
  } = {
    error: {
      code: statusCode === 500 ? 'INTERNAL_ERROR' : 'REQUEST_ERROR',
      message: safeMessage,
    },
  };

  if (env.NODE_ENV === 'development' && err.stack) {
    response.error.stack = err.stack;
  }

  res.status(statusCode).json(response);
};
