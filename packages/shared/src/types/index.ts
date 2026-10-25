export type { HealthStatus } from '../schemas/health.js';
export type {
  ContactPayload,
  ContactSubmissionResponse,
  ProjectType,
  BudgetRange,
  Timeline,
} from '../schemas/contact.js';

export interface ApiResponse<T> {
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}
