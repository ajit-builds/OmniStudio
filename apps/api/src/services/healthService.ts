import type { HealthStatus } from '@studio-omni/shared';
import { env } from '../config/env.js';

export class HealthService {
  public static getHealth(): HealthStatus {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      environment: env.NODE_ENV,
      service: 'studio-omni-api',
      version: '0.1.0',
    };
  }
}
