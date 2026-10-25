import type { Request, Response, NextFunction } from 'express';

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// In-memory IP tracking map
const ipRecords = new Map<string, RateLimitRecord>();

interface RateLimiterOptions {
  windowMs: number;
  maxRequests: number;
}

export const createRateLimiter = (options: RateLimiterOptions) => {
  const { windowMs, maxRequests } = options;

  return (req: Request, res: Response, next: NextFunction): void => {
    // Determine client IP safely without blind trust
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown-client';
    const now = Date.now();

    const record = ipRecords.get(clientIp);

    if (!record || now > record.resetTime) {
      // Create new window
      ipRecords.set(clientIp, {
        count: 1,
        resetTime: now + windowMs,
      });
      res.setHeader('X-RateLimit-Limit', maxRequests);
      res.setHeader('X-RateLimit-Remaining', maxRequests - 1);
      return next();
    }

    if (record.count >= maxRequests) {
      const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);
      res.setHeader('Retry-After', retryAfterSeconds);
      res.setHeader('X-RateLimit-Limit', maxRequests);
      res.setHeader('X-RateLimit-Remaining', 0);

      res.status(429).json({
        error: {
          code: 'RATE_LIMIT_EXCEEDED',
          message:
            'Too many inquiry submissions from this network address. Please wait before submitting another inquiry.',
        },
      });
      return;
    }

    record.count += 1;
    res.setHeader('X-RateLimit-Limit', maxRequests);
    res.setHeader('X-RateLimit-Remaining', maxRequests - record.count);
    return next();
  };
};

// Reset function for testing suite cleanup
export const resetRateLimiter = (): void => {
  ipRecords.clear();
};

// Standard contact form rate limiter: 5 submissions per 15 minutes
export const contactRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  maxRequests: 5,
});
