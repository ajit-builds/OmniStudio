import type { ContactPayload, ContactSubmissionResponse } from '@studio-omni/shared';
import { env } from '../config/env.js';
import { getEmailProvider } from './email/emailProvider.js';

export class MailDispatchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MailDispatchError';
  }
}

// Safe HTML escaping helper
const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export class ContactService {
  async processInquiry(payload: ContactPayload): Promise<ContactSubmissionResponse> {
    const referenceId = `OMNI-INQ-${Date.now().toString(36).toUpperCase()}`;

    // 1. Honeypot check: If the hidden honeypot field has any value, treat as spam bot
    // We return a synthetic success response so the bot does not adapt, but do not dispatch email
    if (payload.honeypot && payload.honeypot.trim().length > 0) {
      return {
        success: true,
        message: 'Your inquiry has been received by Studio Omni.',
        referenceId,
        delivered: false,
      };
    }

    // 2. Prepare plain text and escaped HTML email content
    const subject = `[Studio Omni Inquiry] ${payload.projectType} — ${payload.name}${
      payload.organization ? ` (${payload.organization})` : ''
    }`;

    const plainTextBody = `
STUDIO OMNI — NEW COMMISSION INQUIRY
Reference: ${referenceId}
--------------------------------------------------
Sender: ${payload.name}
Email: ${payload.email}
Organization: ${payload.organization || 'Not specified'}
Project Discipline: ${payload.projectType}
Budget Guidance: ${payload.budgetRange || 'Not specified'}
Timeline: ${payload.timeline || 'Not specified'}

Message:
${payload.message}
--------------------------------------------------
Reply directly to this email to contact the sender.
`;

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #242522; background-color: #F1EDE3; padding: 24px; }
    .card { background-color: #ffffff; border: 1px solid #D8D2C4; max-width: 600px; margin: 0 auto; padding: 32px; }
    .header { border-bottom: 2px solid #B6503B; padding-bottom: 16px; margin-bottom: 24px; }
    .title { font-size: 20px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #242522; margin: 0; }
    .meta-row { margin-bottom: 12px; font-size: 14px; }
    .meta-label { font-weight: 600; color: #595B55; display: inline-block; width: 140px; }
    .message-box { background-color: #F8F6F0; border-left: 3px solid #B6503B; padding: 16px; margin-top: 20px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; }
    .footer { font-size: 12px; color: #8C8E85; margin-top: 24px; border-top: 1px solid #E8E3D7; padding-top: 12px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1 class="title">Studio Omni — Inquiry</h1>
      <span style="font-size: 12px; color: #B6503B;">Reference: ${referenceId}</span>
    </div>
    <div class="meta-row"><span class="meta-label">Sender Name:</span> <strong>${escapeHtml(payload.name)}</strong></div>
    <div class="meta-row"><span class="meta-label">Email:</span> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></div>
    <div class="meta-row"><span class="meta-label">Organization:</span> ${escapeHtml(payload.organization || 'Not specified')}</div>
    <div class="meta-row"><span class="meta-label">Discipline:</span> <strong>${escapeHtml(payload.projectType)}</strong></div>
    <div class="meta-row"><span class="meta-label">Budget Guidance:</span> ${escapeHtml(payload.budgetRange || 'Not specified')}</div>
    <div class="meta-row"><span class="meta-label">Timeline:</span> ${escapeHtml(payload.timeline || 'Not specified')}</div>
    <div class="message-box">${escapeHtml(payload.message)}</div>
    <div class="footer">Reply directly to this email to contact ${escapeHtml(payload.name)} (${escapeHtml(payload.email)}).</div>
  </div>
</body>
</html>
`;

    // 3. Dispatch to Email Provider
    const provider = getEmailProvider();
    const result = await provider.send({
      to: env.STUDIO_EMAIL_RECIPIENT,
      from: env.EMAIL_SENDER,
      replyTo: payload.email,
      subject,
      text: plainTextBody,
      html: htmlBody,
    });

    if (!result.delivered) {
      throw new MailDispatchError(
        result.error || 'Email dispatch provider failed to transmit message',
      );
    }

    return {
      success: true,
      message:
        'Your inquiry has been received. Studio Omni reviews incoming briefs within 2–3 business days.',
      referenceId,
      delivered: true,
    };
  }
}

export const contactService = new ContactService();
