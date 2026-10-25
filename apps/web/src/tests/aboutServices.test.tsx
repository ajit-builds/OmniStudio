import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SERVICE_FAMILIES, getServiceBySlug } from '../content/services.js';
import { STUDIO_PRINCIPLES } from '../content/principles.js';
import { FAQ_ITEMS } from '../content/faq.js';
import { AboutPage } from '../pages/AboutPage.js';
import { ServicesPage } from '../pages/ServicesPage.js';

describe('Studio Omni: About, Philosophy & Services Systems', () => {
  describe('Content Models & Data Integrity', () => {
    it('validates 3 core service families with complete metadata', () => {
      expect(SERVICE_FAMILIES).toHaveLength(3);
      const titles = SERVICE_FAMILIES.map((s) => s.title);
      expect(titles).toContain('Identity Systems');
      expect(titles).toContain('Digital Experiences');
      expect(titles).toContain('Editorial & Campaigns');

      SERVICE_FAMILIES.forEach((family) => {
        expect(family.deliverables.length).toBeGreaterThanOrEqual(4);
        expect(family.suitableFor.length).toBeGreaterThanOrEqual(3);
        expect(family.valueProposition).toBeDefined();
        expect(family.relatedProjectSlugs.length).toBeGreaterThanOrEqual(2);
      });
    });

    it('queries service family by slug accurately', () => {
      const identity = getServiceBySlug('identity-systems');
      expect(identity).toBeDefined();
      expect(identity?.title).toBe('Identity Systems');

      const nonExistent = getServiceBySlug('fabricated-service');
      expect(nonExistent).toBeUndefined();
    });

    it('validates 5 foundational studio principles', () => {
      expect(STUDIO_PRINCIPLES).toHaveLength(5);
      STUDIO_PRINCIPLES.forEach((principle) => {
        expect(principle.title).toBeDefined();
        expect(principle.statement).toBeDefined();
        expect(principle.rationale).toBeDefined();
        expect(principle.coordinate).toBeDefined();
      });
    });

    it('validates 6 practical FAQ items covering essential inquiries', () => {
      expect(FAQ_ITEMS).toHaveLength(6);
      const questions = FAQ_ITEMS.map((f) => f.question);
      expect(questions.some((q) => q.includes('What types of projects'))).toBe(true);
      expect(
        questions.some((q) => q.includes('Can I commission a single standalone discipline')),
      ).toBe(true);
      expect(
        questions.some((q) =>
          q.includes('Can visual identity and digital platform work be combined'),
        ),
      ).toBe(true);
      expect(questions.some((q) => q.includes('How is a project scope defined'))).toBe(true);
      expect(questions.some((q) => q.includes('How do timelines and pricing operate'))).toBe(true);
      expect(questions.some((q) => q.includes('What happens after the initial inquiry'))).toBe(
        true,
      );
    });
  });

  describe('About Page (/about)', () => {
    it('renders all 7 narrative sections including philosophy and principles', () => {
      render(
        <MemoryRouter initialEntries={['/about']}>
          <AboutPage />
        </MemoryRouter>,
      );

      // 1. Point of View
      expect(
        screen.getByRole('heading', { name: /we shape the invisible/i, level: 1 }),
      ).toBeInTheDocument();
      expect(screen.getByText(/through rigorous, design-first systems/i)).toBeInTheDocument();

      // 2. What Studio Omni Means
      expect(
        screen.getByRole('heading', { name: /the continuum of disciplines/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/the totality of relationships between form, interface, and text/i),
      ).toBeInTheDocument();

      // 3. Five Governing Principles
      expect(
        screen.getByRole('heading', { name: /five governing principles/i }),
      ).toBeInTheDocument();
      expect(screen.getByText('Structure before')).toBeInTheDocument();
      expect(screen.getByText('Clarity over')).toBeInTheDocument();

      // 4. Thinking and Making
      expect(
        screen.getByRole('heading', { name: /between thinking & making/i }),
      ).toBeInTheDocument();

      // 5. Studio in Practice
      expect(
        screen.getByRole('heading', { name: /factual, disciplined collaboration/i }),
      ).toBeInTheDocument();
      expect(screen.getByText('Direct Principal Collaboration')).toBeInTheDocument();

      // 6. Four-Stage Working Process
      expect(
        screen.getByRole('heading', { name: /the four-stage progression/i }),
      ).toBeInTheDocument();
      expect(screen.getByText('Stage 01')).toBeInTheDocument();
      expect(screen.getByText('Discover')).toBeInTheDocument();

      // 7. Contact Invitation
      expect(screen.getByRole('heading', { name: /shape your next system/i })).toBeInTheDocument();
    });
  });

  describe('Services Page (/services)', () => {
    it('renders all core service families and disciplines', () => {
      render(
        <MemoryRouter initialEntries={['/services']}>
          <ServicesPage />
        </MemoryRouter>,
      );

      // Intro
      expect(
        screen.getByRole('heading', { name: /discipline catalog/i, level: 1 }),
      ).toBeInTheDocument();

      // Service Families
      expect(
        screen.getByRole('heading', { name: /three disciplines in depth/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: 'Identity Systems', level: 3 }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: 'Digital Experiences', level: 3 }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: 'Editorial & Campaigns', level: 3 }),
      ).toBeInTheDocument();

      // Intersections
      expect(
        screen.getByRole('heading', { name: /how the disciplines intersect/i }),
      ).toBeInTheDocument();

      // Engagement
      expect(
        screen.getByRole('heading', { name: /what to expect in collaboration/i }),
      ).toBeInTheDocument();
    });

    it('handles interactive FAQ accordion expansion and collapse with ARIA compliance', () => {
      render(
        <MemoryRouter initialEntries={['/services']}>
          <ServicesPage />
        </MemoryRouter>,
      );

      const faq1Btn = screen.getByRole('button', {
        name: /what types of projects does studio omni take on/i,
      });
      const faq2Btn = screen.getByRole('button', {
        name: /can i commission a single standalone discipline/i,
      });

      // Default state: FAQ 1 is expanded
      expect(faq1Btn).toHaveAttribute('aria-expanded', 'true');
      expect(faq2Btn).toHaveAttribute('aria-expanded', 'false');

      // Click FAQ 2 to expand it
      fireEvent.click(faq2Btn);
      expect(faq2Btn).toHaveAttribute('aria-expanded', 'true');
      expect(faq1Btn).toHaveAttribute('aria-expanded', 'false');

      // Click FAQ 2 again to collapse it
      fireEvent.click(faq2Btn);
      expect(faq2Btn).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
