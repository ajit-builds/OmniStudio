import type { ContactPayload, ContactSubmissionResponse, ApiResponse } from '@studio-omni/shared';

export interface ApiSubmissionResult {
  ok: boolean;
  data?: ContactSubmissionResponse;
  error?: {
    code: string;
    message: string;
    details?: Record<string, string[]>;
  };
}

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const submitContactInquiry = async (
  payload: ContactPayload,
): Promise<ApiSubmissionResult> => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const body: ApiResponse<ContactSubmissionResponse> = await response.json();

    if (!response.ok || body.error) {
      return {
        ok: false,
        error: {
          code: body.error?.code || (response.status === 429 ? 'RATE_LIMIT_EXCEEDED' : 'API_ERROR'),
          message:
            body.error?.message ||
            (response.status === 429
              ? 'Too many inquiries submitted from this network. Please wait a few moments before trying again.'
              : 'The inquiry service was unable to process your request. Please try again.'),
          details: body.error?.details as Record<string, string[]> | undefined,
        },
      };
    }

    if (!body.data?.success) {
      return {
        ok: false,
        error: {
          code: 'DELIVERY_UNCONFIRMED',
          message:
            body.data?.message || 'Server received payload but delivery could not be verified.',
        },
      };
    }

    return {
      ok: true,
      data: body.data,
    };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'A network connection error prevented message delivery.';
    return {
      ok: false,
      error: {
        code: 'NETWORK_FAILURE',
        message: `Network communication failure: ${message}. Please check your connection and retry.`,
      },
    };
  }
};
