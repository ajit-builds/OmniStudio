import type { Request, Response } from 'express';
import { ContactPayloadSchema } from '@studio-omni/shared';
import { contactService, MailDispatchError } from '../services/contactService.js';

export const handleContactSubmission = async (req: Request, res: Response): Promise<void> => {
  // 1. Authoritative Server-Side Validation
  const parseResult = ContactPayloadSchema.safeParse(req.body);

  if (!parseResult.success) {
    const formattedErrors: Record<string, string[]> = {};
    parseResult.error.errors.forEach((err) => {
      const field = err.path.join('.') || 'root';
      if (!formattedErrors[field]) {
        formattedErrors[field] = [];
      }
      formattedErrors[field].push(err.message);
    });

    res.status(400).json({
      error: {
        code: 'VALIDATION_ERROR',
        message: 'The submitted inquiry payload contains invalid or missing required fields.',
        details: formattedErrors,
      },
    });
    return;
  }

  try {
    // 2. Process inquiry through service
    const outcome = await contactService.processInquiry(parseResult.data);

    res.status(200).json({
      data: outcome,
    });
  } catch (err) {
    // Distinguish provider transmission errors from internal exceptions
    if (err instanceof MailDispatchError) {
      res.status(503).json({
        error: {
          code: 'MAIL_DISPATCH_UNAVAILABLE',
          message:
            'The inquiry service is temporarily unable to dispatch message transmission. Please retry momentarily.',
        },
      });
      return;
    }

    res.status(500).json({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred while processing your inquiry.',
      },
    });
  }
};
