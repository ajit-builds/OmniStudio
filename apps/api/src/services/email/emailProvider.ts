import { env } from '../../config/env.js';

export interface SendEmailParams {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}

export interface SendEmailResult {
  delivered: boolean;
  messageId?: string;
  error?: string;
}

export interface EmailProvider {
  send(params: SendEmailParams): Promise<SendEmailResult>;
}

/**
 * Mock Email Provider for automated tests and local development
 */
export class MockEmailProvider implements EmailProvider {
  public sentEmails: SendEmailParams[] = [];
  public shouldSimulateFailure = false;

  async send(params: SendEmailParams): Promise<SendEmailResult> {
    if (this.shouldSimulateFailure) {
      return {
        delivered: false,
        error: 'Simulated email transport failure for testing',
      };
    }

    this.sentEmails.push(params);
    return {
      delivered: true,
      messageId: `mock-msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    };
  }

  clear(): void {
    this.sentEmails = [];
    this.shouldSimulateFailure = false;
  }
}

/**
 * Resend Email Provider for real SMTP/API delivery
 */
export class ResendEmailProvider implements EmailProvider {
  private apiKey: string;

  constructor(apiKey?: string) {
    if (!apiKey) {
      throw new Error('ResendEmailProvider requires RESEND_API_KEY to be configured.');
    }
    this.apiKey = apiKey;
  }

  async send(params: SendEmailParams): Promise<SendEmailResult> {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: params.from,
          to: [params.to],
          reply_to: params.replyTo,
          subject: params.subject,
          text: params.text,
          html: params.html,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        return {
          delivered: false,
          error: `Resend API rejected transmission (status ${response.status}): ${errorBody}`,
        };
      }

      const data = (await response.json()) as { id?: string };
      return {
        delivered: true,
        messageId: data.id || 'resend-confirmed',
      };
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Unknown network failure during email dispatch';
      return {
        delivered: false,
        error: message,
      };
    }
  }
}

// Global singleton instance for runtime and testing
let activeEmailProvider: EmailProvider | null = null;

export const getEmailProvider = (): EmailProvider => {
  if (activeEmailProvider) {
    return activeEmailProvider;
  }

  if (env.EMAIL_PROVIDER === 'resend') {
    if (!env.RESEND_API_KEY || env.RESEND_API_KEY.includes('placeholder')) {
      throw new Error(
        'EMAIL_PROVIDER is set to resend, but a valid RESEND_API_KEY is not configured in environment.',
      );
    }
    activeEmailProvider = new ResendEmailProvider(env.RESEND_API_KEY);
  } else {
    // Default to MockEmailProvider for development and testing
    activeEmailProvider = new MockEmailProvider();
  }

  return activeEmailProvider;
};

// Helper for test suites to inject mock providers
export const setEmailProviderForTesting = (provider: EmailProvider | null): void => {
  activeEmailProvider = provider;
};
