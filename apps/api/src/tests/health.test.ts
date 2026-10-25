import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app.js';
import { healthStatusSchema } from '@studio-omni/shared';

describe('Studio Omni API Foundation', () => {
  it('GET /api/health returns 200 and matches HealthStatus schema', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);

    const parseResult = healthStatusSchema.safeParse(response.body);
    expect(parseResult.success).toBe(true);

    if (parseResult.success) {
      expect(parseResult.data.status).toBe('ok');
      expect(parseResult.data.service).toBe('studio-omni-api');
      expect(parseResult.data.version).toBe('0.1.0');
      expect(typeof parseResult.data.uptime).toBe('number');
    }
  });

  it('GET /api/nonexistent returns 404 with structured error', async () => {
    const response = await request(app).get('/api/nonexistent');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: {
        code: 'NOT_FOUND',
        message: 'Cannot GET /api/nonexistent',
      },
    });
  });
});
