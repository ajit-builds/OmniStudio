import dotenv from 'dotenv';
import { z } from 'zod';

// Load .env file if available
dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
  EMAIL_PROVIDER: z.enum(['mock', 'resend', 'smtp']).default('mock'),
  STUDIO_EMAIL_RECIPIENT: z.string().email().default('studio@studiomni.design'),
  EMAIL_SENDER: z.string().email().default('inquiries@studiomni.design'),
  RESEND_API_KEY: z.string().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment configuration:', parsed.error.format());
  throw new Error('Environment configuration validation failed');
}

export const env = parsed.data;
