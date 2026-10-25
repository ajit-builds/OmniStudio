import { app } from './app.js';
import { env } from './config/env.js';
import type { Server } from 'http';

let server: Server | null = null;

const startServer = (): void => {
  try {
    server = app.listen(env.PORT, () => {
      console.log(`[Studio Omni API] Server running on http://localhost:${env.PORT}`);
      console.log(`[Studio Omni API] Environment: ${env.NODE_ENV}`);
      console.log(`[Studio Omni API] Health endpoint: http://localhost:${env.PORT}/api/health`);
    });

    const shutdown = (signal: string) => {
      console.log(`\n[Studio Omni API] Received ${signal}. Starting graceful shutdown...`);
      if (server) {
        server.close(() => {
          console.log('[Studio Omni API] HTTP server closed. Process terminating.');
          process.exit(0);
        });

        // Force shutdown after 10 seconds if connections refuse to close
        setTimeout(() => {
          console.error('[Studio Omni API] Forced shutdown due to open connections.');
          process.exit(1);
        }, 10000).unref();
      } else {
        process.exit(0);
      }
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
  } catch (error) {
    console.error('[Studio Omni API] Startup failed:', error);
    process.exit(1);
  }
};

startServer();
