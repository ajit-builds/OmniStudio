import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { app } from '../app.js';
import { MockEmailProvider, setEmailProviderForTesting } from '../services/email/emailProvider.js';
import { resetRateLimiter } from '../middleware/rateLimiter.js';

describe('Studio Omni Contact API & Security (POST /api/contact)', () => {
  let mockProvider: MockEmailProvider;

  beforeEach(() => {
    resetRateLimiter();
    mockProvider = new MockEmailProvider();
    setEmailProviderForTesting(mockProvider);
  });

  const validPayload = {
    name: 'Elena Rostova',
    email: 'elena@rostova-arch.com',
    organization: 'Rostova Architecture Foundation',
    projectType: 'Identity Systems',
    budgetRange: '$30,000 – $60,000',
    timeline: 'Upcoming / Q2–Q3',
    message:
      'We are commissioning a comprehensive brand identity system and tactile catalog for our upcoming pavilion.',
  };

  it('accepts and processes valid inquiry payload successfully', async () => {
    const res = await request(app).post('/api/contact').send(validPayload);

    expect(res.status).toBe(200);
    expect(res.body.data).toBeDefined();
    expect(res.body.data.success).toBe(true);
    expect(res.body.data.referenceId).toMatch(/^OMNI-INQ-/);
    expect(mockProvider.sentEmails).toHaveLength(1);
    const sent = mockProvider.sentEmails[0];
    expect(sent).toBeDefined();
    expect(sent?.to).toBeDefined();
    expect(sent?.replyTo).toBe('elena@rostova-arch.com');
  });

  it('handles honeypot submissions silently without dispatching email', async () => {
    const spamPayload = {
      ...validPayload,
      honeypot: 'http://spambot-trap.com',
    };

    const res = await request(app).post('/api/contact').send(spamPayload);

    expect(res.status).toBe(200);
    expect(res.body.data.success).toBe(true);
    // Crucial: No email must be dispatched for honeypot bots
    expect(mockProvider.sentEmails).toHaveLength(0);
  });

  it('rejects payload with missing required fields with structured validation errors', async () => {
    const res = await request(app).post('/api/contact').send({});

    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
    expect(res.body.error.code).toBe('VALIDATION_ERROR');
    expect(res.body.error.details).toBeDefined();
    expect(res.body.error.details.name).toBeDefined();
    expect(res.body.error.details.email).toBeDefined();
    expect(res.body.error.details.projectType).toBeDefined();
    expect(res.body.error.details.message).toBeDefined();
  });

  it('rejects invalid email addresses', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        ...validPayload,
        email: 'not-an-email',
      });

    expect(res.status).toBe(400);
    expect(res.body.error.details.email).toContain('Please enter a valid email address');
  });

  it('rejects unsupported project types', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        ...validPayload,
        projectType: 'Cryptocurrency Trading Bot',
      });

    expect(res.status).toBe(400);
    expect(res.body.error.details.projectType).toBeDefined();
  });

  it('rejects messages that are too short (under 10 chars)', async () => {
    const res = await request(app)
      .post('/api/contact')
      .send({
        ...validPayload,
        message: 'Hi',
      });

    expect(res.status).toBe(400);
    expect(res.body.error.details.message).toContain('Message must be at least 10 characters');
  });

  it('enforces rate limiting after 5 consecutive submissions', async () => {
    // Send 5 successful requests
    for (let i = 0; i < 5; i++) {
      const res = await request(app).post('/api/contact').send(validPayload);
      expect(res.status).toBe(200);
    }

    // The 6th request must trigger HTTP 429 Rate Limit Exceeded
    const blockedRes = await request(app).post('/api/contact').send(validPayload);
    expect(blockedRes.status).toBe(429);
    expect(blockedRes.body.error.code).toBe('RATE_LIMIT_EXCEEDED');
    expect(blockedRes.headers['retry-after']).toBeDefined();
  });

  it('safely handles provider failure without exposing internal exceptions', async () => {
    mockProvider.shouldSimulateFailure = true;

    const res = await request(app).post('/api/contact').send(validPayload);

    expect(res.status).toBe(503);
    expect(res.body.error.code).toBe('MAIL_DISPATCH_UNAVAILABLE');
    expect(res.body.error.message).toContain('temporarily unable to dispatch message transmission');
    expect(res.body.stack).toBeUndefined(); // Stack traces must never leak
  });

  it('preserves existing health endpoint integrity', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
