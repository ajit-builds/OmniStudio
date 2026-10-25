import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader.js';
import { MobileNavigation } from '../components/layout/MobileNavigation.js';
import { SiteFooter } from '../components/layout/SiteFooter.js';
import { PageLoadingFallback } from '../components/ui/PageLoadingFallback.js';
import { NotFoundPage } from '../pages/NotFoundPage.js';

describe('Studio Omni Layout, Navigation & Fallback Systems', () => {
  describe('SiteHeader & Desktop Navigation', () => {
    it('renders the Studio Omni wordmark linking to home', () => {
      render(
        <MemoryRouter>
          <SiteHeader />
        </MemoryRouter>,
      );

      const wordmark = screen.getByRole('link', { name: /studio omni — home/i });
      expect(wordmark).toBeInTheDocument();
      expect(wordmark).toHaveAttribute('href', '/');
    });

    it('renders all four primary navigation destinations', () => {
      render(
        <MemoryRouter>
          <SiteHeader />
        </MemoryRouter>,
      );

      expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/work');
      expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
      expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services');
      expect(screen.getByRole('link', { name: 'Journal' })).toHaveAttribute('href', '/journal');
    });

    it('provides high-contrast CTA to initiate dialogue', () => {
      render(
        <MemoryRouter>
          <SiteHeader />
        </MemoryRouter>,
      );

      const cta = screen.getByRole('link', { name: /initiate contact with studio omni/i });
      expect(cta).toBeInTheDocument();
      expect(cta).toHaveAttribute('href', '/contact');
    });

    it('toggles mobile menu state and updates aria attributes', () => {
      render(
        <MemoryRouter>
          <SiteHeader />
        </MemoryRouter>,
      );

      const toggle = screen.getByRole('button', { name: /open navigation menu/i });
      expect(toggle).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute('aria-expanded', 'true');
      expect(toggle).toHaveAttribute('aria-label', 'Close navigation menu');
    });
  });

  describe('MobileNavigation Accessibility & Lifecycle', () => {
    it('locks body scroll when open and unlocks when closed', () => {
      const onClose = vi.fn();
      const { rerender } = render(
        <MemoryRouter>
          <MobileNavigation isOpen={true} onClose={onClose} />
        </MemoryRouter>,
      );

      expect(document.body.style.overflow).toBe('hidden');

      rerender(
        <MemoryRouter>
          <MobileNavigation isOpen={false} onClose={onClose} />
        </MemoryRouter>,
      );

      expect(document.body.style.overflow).toBe('');
    });

    it('dismisses when Escape key is pressed', () => {
      const onClose = vi.fn();
      render(
        <MemoryRouter>
          <MobileNavigation isOpen={true} onClose={onClose} />
        </MemoryRouter>,
      );

      fireEvent.keyDown(window, { key: 'Escape' });
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('triggers onClose when a navigation item is selected', () => {
      const onClose = vi.fn();
      render(
        <MemoryRouter>
          <MobileNavigation isOpen={true} onClose={onClose} />
        </MemoryRouter>,
      );

      const workLink = screen.getByRole('link', { name: 'Work' });
      fireEvent.click(workLink);
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('SiteFooter & Discipline Anchors', () => {
    it('renders studio philosophy and discipline links without fake external accounts', () => {
      render(
        <MemoryRouter>
          <SiteFooter />
        </MemoryRouter>,
      );

      expect(screen.getByText('We shape the invisible.')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Identity Systems' })).toHaveAttribute(
        'href',
        '/services',
      );
      expect(screen.getByRole('link', { name: 'Digital Experiences' })).toHaveAttribute(
        'href',
        '/services',
      );
      expect(screen.getByRole('link', { name: 'Editorial & Campaigns' })).toHaveAttribute(
        'href',
        '/services',
      );
    });

    it('includes a functional back-to-top control', () => {
      const scrollSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});

      render(
        <MemoryRouter>
          <SiteFooter />
        </MemoryRouter>,
      );

      const backToTopBtn = screen.getByRole('button', { name: /scroll back to top/i });
      fireEvent.click(backToTopBtn);
      expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });

  describe('PageLoadingFallback', () => {
    it('renders accessible loading status indicator', () => {
      render(<PageLoadingFallback />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading page content');
      expect(screen.getByText(/studio omni \/\/ loading system/i)).toBeInTheDocument();
    });
  });

  describe('NotFoundPage (404)', () => {
    it('renders branded architectural not-found screen with recovery links', () => {
      render(
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>,
      );

      expect(screen.getByRole('heading', { name: '404', level: 1 })).toBeInTheDocument();
      expect(screen.getByText(/the requested coordinate does not exist/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /return to overview/i })).toHaveAttribute(
        'href',
        '/',
      );
      expect(screen.getByRole('link', { name: /explore selected work/i })).toHaveAttribute(
        'href',
        '/work',
      );
    });
  });
});
