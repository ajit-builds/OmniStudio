import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContactPage } from '../pages/ContactPage.js';
import * as apiClient from '../lib/apiClient.js';

describe('Studio Omni Contact System & Inquiry Protocol', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe('Page Composition & Direct Information', () => {
    it('renders editorial intro and truthful studio inquiry protocol without fake credentials', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>,
      );

      // Intro
      expect(screen.getByRole('heading', { name: /initiate dialogue/i })).toBeInTheDocument();
      expect(screen.getByText(/commission & inquiry \/ studio omni/i)).toBeInTheDocument();

      // Protocol Sidebar
      expect(
        screen.getByRole('heading', { name: /direct studio engagement/i }),
      ).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /scope of practice/i })).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /confidentiality & discretion/i }),
      ).toBeInTheDocument();

      // Ensure no fabricated contact methods exist
      expect(screen.queryByText(/555-/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/suite \d+/i)).not.toBeInTheDocument();
    });

    it('renders all required and optional form fields with correct accessibility attributes', () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>,
      );

      // Form labels and inputs
      expect(screen.getByLabelText(/name \*/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email address \*/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/organization \/ studio/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/project discipline \*/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/budget scope guidance/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/anticipated timeline/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/inquiry & context \*/i)).toBeInTheDocument();

      // Submit button
      expect(screen.getByRole('button', { name: /transmit inquiry/i })).toBeInTheDocument();
    });
  });

  describe('Form Validation & Error States', () => {
    it('blocks submission and surfaces clear error messages when required fields are empty', async () => {
      const submitSpy = vi.spyOn(apiClient, 'submitContactInquiry');

      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>,
      );

      const submitButton = screen.getByRole('button', { name: /transmit inquiry/i });
      fireEvent.click(submitButton);

      // Submit client function should NOT have been called
      expect(submitSpy).not.toHaveBeenCalled();

      // Validation errors should appear
      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email address is required/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });
    });

    it('validates email syntax', async () => {
      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>,
      );

      fireEvent.change(screen.getByLabelText(/name \*/i), {
        target: { value: 'Helena Markson' },
      });
      fireEvent.change(screen.getByLabelText(/email address \*/i), {
        target: { value: 'not-an-email' },
      });
      fireEvent.change(screen.getByLabelText(/inquiry & context \*/i), {
        target: { value: 'A thoughtful architectural project description with sufficient length.' },
      });

      fireEvent.click(screen.getByRole('button', { name: /transmit inquiry/i }));

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      });
    });
  });

  describe('API Submission Lifecycle', () => {
    it('prevents duplicate submissions while request is in flight', async () => {
      let resolvePromise: (value: apiClient.ApiSubmissionResult) => void;
      const delayedPromise = new Promise<apiClient.ApiSubmissionResult>((resolve) => {
        resolvePromise = resolve;
      });

      vi.spyOn(apiClient, 'submitContactInquiry').mockReturnValue(delayedPromise);

      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>,
      );

      // Fill valid data
      fireEvent.change(screen.getByLabelText(/name \*/i), {
        target: { value: 'Helena Markson' },
      });
      fireEvent.change(screen.getByLabelText(/email address \*/i), {
        target: { value: 'helena@markson-design.org' },
      });
      fireEvent.change(screen.getByLabelText(/inquiry & context \*/i), {
        target: {
          value: 'Comprehensive identity and digital design inquiry for new cultural pavilion.',
        },
      });

      const submitButton = screen.getByRole('button', { name: /transmit inquiry/i });
      fireEvent.click(submitButton);

      // Button should now be disabled and show loading state
      await waitFor(() => {
        expect(submitButton).toBeDisabled();
        expect(screen.getByText(/transmitting inquiry\.\.\./i)).toBeInTheDocument();
      });

      // Secondary click should be ignored
      fireEvent.click(submitButton);
      expect(apiClient.submitContactInquiry).toHaveBeenCalledTimes(1);

      // Resolve API response
      resolvePromise!({
        ok: true,
        data: {
          success: true,
          message: 'Inquiry successfully transmitted.',
          referenceId: 'REF-TEST-9988',
        },
      });

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /inquiry confirmed/i })).toBeInTheDocument();
        expect(screen.getByText(/ref: REF-TEST-9988/i)).toBeInTheDocument();
      });
    });

    it('renders verified success confirmation with reference ID and allows reset', async () => {
      vi.spyOn(apiClient, 'submitContactInquiry').mockResolvedValue({
        ok: true,
        data: {
          success: true,
          message: 'Your inquiry has been registered with Studio Omni.',
          referenceId: 'OMNI-771122',
        },
      });

      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>,
      );

      fireEvent.change(screen.getByLabelText(/name \*/i), { target: { value: 'Julian Brandt' } });
      fireEvent.change(screen.getByLabelText(/email address \*/i), {
        target: { value: 'julian@studiobrandt.de' },
      });
      fireEvent.change(screen.getByLabelText(/inquiry & context \*/i), {
        target: {
          value: 'We are commissioning a new digital publishing system for our monograph series.',
        },
      });

      fireEvent.click(screen.getByRole('button', { name: /transmit inquiry/i }));

      await waitFor(() => {
        expect(screen.getByRole('heading', { name: /inquiry confirmed/i })).toBeInTheDocument();
        expect(screen.getByText(/ref: OMNI-771122/i)).toBeInTheDocument();
      });

      // Click "Submit Another Inquiry" reset button
      const resetButton = screen.getByRole('button', { name: /submit another inquiry/i });
      fireEvent.click(resetButton);

      // Form is back in idle state
      expect(screen.getByRole('button', { name: /transmit inquiry/i })).toBeInTheDocument();
    });

    it('preserves form data when server reports rate limiting and allows retry', async () => {
      vi.spyOn(apiClient, 'submitContactInquiry').mockResolvedValue({
        ok: false,
        error: {
          code: 'RATE_LIMIT_EXCEEDED',
          message:
            'Too many inquiries submitted from this network. Please wait a few moments before trying again.',
        },
      });

      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>,
      );

      const testName = 'Marcus Chen';
      const testEmail = 'marcus@chen-arch.com';
      const testMessage = 'Inquiring about spatial identity and architectural signage system.';

      fireEvent.change(screen.getByLabelText(/name \*/i), { target: { value: testName } });
      fireEvent.change(screen.getByLabelText(/email address \*/i), {
        target: { value: testEmail },
      });
      fireEvent.change(screen.getByLabelText(/inquiry & context \*/i), {
        target: { value: testMessage },
      });

      fireEvent.click(screen.getByRole('button', { name: /transmit inquiry/i }));

      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/too many inquiries/i)).toBeInTheDocument();
      });

      // Data must be preserved
      expect(screen.getByLabelText(/name \*/i)).toHaveValue(testName);
      expect(screen.getByLabelText(/email address \*/i)).toHaveValue(testEmail);
      expect(screen.getByLabelText(/inquiry & context \*/i)).toHaveValue(testMessage);
    });

    it('preserves form data on network failure', async () => {
      vi.spyOn(apiClient, 'submitContactInquiry').mockResolvedValue({
        ok: false,
        error: {
          code: 'NETWORK_FAILURE',
          message: 'Network communication failure. Please check your connection and retry.',
        },
      });

      render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>,
      );

      fireEvent.change(screen.getByLabelText(/name \*/i), { target: { value: 'Sonia Silva' } });
      fireEvent.change(screen.getByLabelText(/email address \*/i), {
        target: { value: 'sonia@silva.pt' },
      });
      fireEvent.change(screen.getByLabelText(/inquiry & context \*/i), {
        target: { value: 'Digital platform and editorial system for contemporary art museum.' },
      });

      fireEvent.click(screen.getByRole('button', { name: /transmit inquiry/i }));

      await waitFor(() => {
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(screen.getByText(/network communication failure/i)).toBeInTheDocument();
      });

      expect(screen.getByLabelText(/name \*/i)).toHaveValue('Sonia Silva');
    });
  });
});
