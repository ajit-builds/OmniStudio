import { z } from 'zod';

export const PROJECT_TYPES = [
  'Identity Systems',
  'Digital Experiences',
  'Editorial & Campaigns',
  'General Inquiry / Undecided',
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const BUDGET_RANGES = [
  'Under $15,000',
  '$15,000 – $30,000',
  '$30,000 – $60,000',
  '$60,000+',
  'Undecided / Flexible',
] as const;

export type BudgetRange = (typeof BUDGET_RANGES)[number];

export const TIMELINES = ['Immediate / Q1', 'Upcoming / Q2–Q3', 'Flexible / Long-range'] as const;

export type Timeline = (typeof TIMELINES)[number];

export const ContactPayloadSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be 100 characters or fewer'),
  email: z
    .string({ required_error: 'Email address is required' })
    .trim()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be 255 characters or fewer'),
  organization: z
    .string()
    .trim()
    .max(100, 'Organization must be 100 characters or fewer')
    .optional()
    .or(z.literal('')),
  projectType: z.enum(PROJECT_TYPES, {
    errorMap: () => ({ message: 'Please select a valid project discipline' }),
  }),
  budgetRange: z.enum(BUDGET_RANGES).optional().or(z.literal('')),
  timeline: z.enum(TIMELINES).optional().or(z.literal('')),
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(3000, 'Message must be 3000 characters or fewer'),
  honeypot: z.string().optional(),
});

export type ContactPayload = z.infer<typeof ContactPayloadSchema>;

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  delivered?: boolean;
}
