import { useState, type FC, type FormEvent, type ChangeEvent } from 'react';
import {
  PROJECT_TYPES,
  BUDGET_RANGES,
  TIMELINES,
  ContactPayloadSchema,
  type ProjectType,
  type BudgetRange,
  type Timeline,
  type ContactPayload,
} from '@studio-omni/shared';
import { submitContactInquiry } from '../../lib/apiClient.js';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  organization: string;
  projectType: ProjectType;
  budgetRange: BudgetRange | '';
  timeline: Timeline | '';
  message: string;
  honeypot: string;
}

const INITIAL_FORM_STATE: FormState = {
  name: '',
  email: '',
  organization: '',
  projectType: 'General Inquiry / Undecided',
  budgetRange: '',
  timeline: '',
  message: '',
  honeypot: '',
};

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{ referenceId?: string; message: string } | null>(
    null,
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear specific field error as user corrects it
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }

    if (generalError) {
      setGeneralError(null);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'submitting') {
      return;
    }

    // Client-side schema validation using shared Zod schema
    const clientValidation = ContactPayloadSchema.safeParse(formData);

    if (!clientValidation.success) {
      const errors: Record<string, string> = {};
      clientValidation.error.errors.forEach((err) => {
        const fieldName = err.path[0]?.toString() || 'general';
        if (!errors[fieldName]) {
          errors[fieldName] = err.message;
        }
      });
      setFieldErrors(errors);
      setGeneralError('Please review and correct the marked fields below before submitting.');
      return;
    }

    setFieldErrors({});
    setGeneralError(null);
    setStatus('submitting');

    const payload: ContactPayload = clientValidation.data;
    const result = await submitContactInquiry(payload);

    if (result.ok && result.data?.success) {
      setStatus('success');
      setSuccessInfo({
        referenceId: result.data.referenceId,
        message: result.data.message || 'Inquiry successfully received by Studio Omni.',
      });
      setFormData(INITIAL_FORM_STATE);
    } else {
      setStatus('error');
      if (result.error?.details) {
        const serverFieldErrors: Record<string, string> = {};
        Object.entries(result.error.details).forEach(([field, messages]) => {
          if (messages && messages[0]) {
            serverFieldErrors[field] = messages[0];
          }
        });
        setFieldErrors(serverFieldErrors);
      }
      setGeneralError(
        result.error?.message ||
          'A transmission failure occurred. Your entered details have been preserved. Please retry.',
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData(INITIAL_FORM_STATE);
    setFieldErrors({});
    setGeneralError(null);
    setSuccessInfo(null);
  };

  if (status === 'success' && successInfo) {
    return (
      <div className={styles.successCard} role="status" aria-live="polite">
        <div className={styles.successIcon} aria-hidden="true">
          ✓
        </div>
        <div className={styles.successMeta}>
          <span className={styles.successBadge}>Inquiry Accepted</span>
          {successInfo.referenceId && (
            <span className={styles.referenceId}>Ref: {successInfo.referenceId}</span>
          )}
        </div>
        <h2 className={styles.successTitle}>Inquiry Confirmed</h2>
        <p className={styles.successText}>
          {successInfo.message} Every transmission is reviewed directly by our studio partners. We
          will examine your context and communicate directly via your provided email address.
        </p>
        <button type="button" onClick={handleReset} className={styles.resetButton}>
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      noValidate
      aria-label="Studio Commission Inquiry Form"
    >
      {generalError && (
        <div className={styles.alertBanner} role="alert" aria-live="assertive">
          <span className={styles.alertIcon} aria-hidden="true">
            !
          </span>
          <span className={styles.alertMessage}>{generalError}</span>
        </div>
      )}

      {/* Hidden honeypot field for anti-spam bots */}
      <div className={styles.honeypotField} aria-hidden="true">
        <label htmlFor="form-honeypot">Leave this blank if you are human</label>
        <input
          id="form-honeypot"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleInputChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1: Name and Email */}
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="contact-name" className={styles.label}>
            Name{' '}
            <span className={styles.requiredAsterisk} aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
            className={`${styles.input} ${fieldErrors.name ? styles.inputError : ''}`}
            placeholder="Ada Lovelace"
            aria-required="true"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
          />
          {fieldErrors.name && (
            <span id="contact-name-error" className={styles.fieldErrorMessage} role="alert">
              {fieldErrors.name}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contact-email" className={styles.label}>
            Email Address{' '}
            <span className={styles.requiredAsterisk} aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
            className={`${styles.input} ${fieldErrors.email ? styles.inputError : ''}`}
            placeholder="ada@analytical-engine.org"
            aria-required="true"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
          />
          {fieldErrors.email && (
            <span id="contact-email-error" className={styles.fieldErrorMessage} role="alert">
              {fieldErrors.email}
            </span>
          )}
        </div>
      </div>

      {/* Row 2: Organization and Project Discipline */}
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="contact-organization" className={styles.label}>
            Organization / Studio <span className={styles.optionalTag}>(Optional)</span>
          </label>
          <input
            id="contact-organization"
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            disabled={status === 'submitting'}
            className={`${styles.input} ${fieldErrors.organization ? styles.inputError : ''}`}
            placeholder="Institute or Practice Name"
            aria-invalid={!!fieldErrors.organization}
            aria-describedby={fieldErrors.organization ? 'contact-org-error' : undefined}
          />
          {fieldErrors.organization && (
            <span id="contact-org-error" className={styles.fieldErrorMessage} role="alert">
              {fieldErrors.organization}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contact-project-type" className={styles.label}>
            Project Discipline{' '}
            <span className={styles.requiredAsterisk} aria-hidden="true">
              *
            </span>
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="contact-project-type"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              disabled={status === 'submitting'}
              className={`${styles.select} ${fieldErrors.projectType ? styles.inputError : ''}`}
              aria-required="true"
              aria-invalid={!!fieldErrors.projectType}
              aria-describedby={fieldErrors.projectType ? 'contact-project-type-error' : undefined}
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {fieldErrors.projectType && (
            <span id="contact-project-type-error" className={styles.fieldErrorMessage} role="alert">
              {fieldErrors.projectType}
            </span>
          )}
        </div>
      </div>

      {/* Row 3: Budget Range & Timeline Guidance */}
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="contact-budget" className={styles.label}>
            Budget Scope Guidance <span className={styles.optionalTag}>(Optional Guidance)</span>
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="contact-budget"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleInputChange}
              disabled={status === 'submitting'}
              className={styles.select}
            >
              <option value="">Select an approximate scope range</option>
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contact-timeline" className={styles.label}>
            Anticipated Timeline <span className={styles.optionalTag}>(Optional Guidance)</span>
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="contact-timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              disabled={status === 'submitting'}
              className={styles.select}
            >
              <option value="">Select an approximate timeframe</option>
              {TIMELINES.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Row 4: Message */}
      <div className={styles.formGroup}>
        <label htmlFor="contact-message" className={styles.label}>
          Inquiry & Context{' '}
          <span className={styles.requiredAsterisk} aria-hidden="true">
            *
          </span>
        </label>
        <span className={styles.fieldHint}>
          Describe the challenge, context, or systemic ambition you wish to address.
        </span>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          disabled={status === 'submitting'}
          className={`${styles.textarea} ${fieldErrors.message ? styles.inputError : ''}`}
          placeholder="Outline the core objective, architectural scope, or question you wish to examine together..."
          aria-required="true"
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
        />
        {fieldErrors.message && (
          <span id="contact-message-error" className={styles.fieldErrorMessage} role="alert">
            {fieldErrors.message}
          </span>
        )}
      </div>

      {/* Submission Footer with Privacy Disclosure */}
      <div className={styles.submitSection}>
        <div className={styles.privacyNote}>
          <span className={styles.privacyBullet} aria-hidden="true">
            •
          </span>
          Information submitted here is handled in strict confidence by studio principals. We do not
          share or market client details.
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={styles.submitButton}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <span className={styles.buttonLoading}>
              <span className={styles.spinner} aria-hidden="true" />
              Transmitting Inquiry...
            </span>
          ) : (
            'Transmit Inquiry'
          )}
        </button>
      </div>
    </form>
  );
};
