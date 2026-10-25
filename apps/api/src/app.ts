import express, { type Express } from 'express';
import cors from 'cors';
import { corsOptions } from './config/cors.js';
import { apiRouter } from './routes/index.js';
import { notFoundHandler } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

export const createApp = (): Express => {
  const app = express();

  // Configure middleware
  app.use(cors(corsOptions));
  // Request body size limit to protect against oversized payload abuse
  app.use(express.json({ limit: '64kb' }));

  // Mount API router
  app.use('/api', apiRouter);

  // Fallback 404 handler
  app.use(notFoundHandler);

  // Centralized error handler
  app.use(errorHandler);

  return app;
};

export const app = createApp();
