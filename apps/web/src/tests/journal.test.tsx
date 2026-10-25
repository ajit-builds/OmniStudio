import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import {
  ALL_ARTICLES,
  PUBLISHED_ARTICLES,
  DRAFT_ARTICLES,
  getArticleBySlug,
  getRelatedArticles,
  getArticlesByCategory,
} from '../content/articles.js';
import { JournalPage } from '../pages/JournalPage.js';
import { JournalDetailPage } from '../pages/JournalDetailPage.js';
import { ArticleNotFound } from '../components/journal/ArticleNotFound.js';

describe('Studio Omni Journal Architecture & Editorial Publication', () => {
  describe('Article Content Model & Invariants', () => {
    it('guarantees unique slugs across all published and draft articles', () => {
      const slugs = ALL_ARTICLES.map((a) => a.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(ALL_ARTICLES.length);
      expect(ALL_ARTICLES.length).toBeGreaterThanOrEqual(4);
    });

    it('rigorously separates published essays from drafts', () => {
      expect(PUBLISHED_ARTICLES.length).toBe(3);
      PUBLISHED_ARTICLES.forEach((article) => {
        expect(article.status).toBe('published');
        expect(article.publishedAt).toBeDefined();
      });

      expect(DRAFT_ARTICLES.length).toBeGreaterThanOrEqual(1);
      DRAFT_ARTICLES.forEach((article) => {
        expect(article.status).toBe('draft');
      });
    });

    it('enforces draft protection in getArticleBySlug queries', () => {
      // By default (includeDrafts=false), draft article cannot be resolved
      const draftLookup = getArticleBySlug('the-topology-of-reading-velocity', false);
      expect(draftLookup).toBeUndefined();

      // When includeDrafts=true, draft article can be inspected
      const explicitDraftLookup = getArticleBySlug('the-topology-of-reading-velocity', true);
      expect(explicitDraftLookup).toBeDefined();
      expect(explicitDraftLookup?.title).toBe('The Topology of Reading Velocity');
      expect(explicitDraftLookup?.status).toBe('draft');

      // Published article is always resolved
      const publishedLookup = getArticleBySlug('the-invisible-grid', false);
      expect(publishedLookup).toBeDefined();
      expect(publishedLookup?.title).toBe('The Invisible Grid');
      expect(publishedLookup?.status).toBe('published');
    });

    it('filters articles by category considering only published pieces', () => {
      const systemic = getArticlesByCategory('Systemic Design');
      expect(systemic.length).toBeGreaterThanOrEqual(1);
      systemic.forEach((a) => {
        expect(a.category).toBe('Systemic Design');
        expect(a.status).toBe('published');
      });

      const digital = getArticlesByCategory('Digital Architecture');
      expect(digital.length).toBeGreaterThanOrEqual(1);
      digital.forEach((a) => {
        expect(a.category).toBe('Digital Architecture');
        expect(a.status).toBe('published');
      });
    });

    it('returns related articles that exclude current article and drafts', () => {
      const article = PUBLISHED_ARTICLES[0];
      expect(article).toBeDefined();
      if (!article) return;

      const related = getRelatedArticles(article, 2);
      expect(related.length).toBeGreaterThanOrEqual(1);
      related.forEach((rel) => {
        expect(rel.slug).not.toBe(article.slug);
        expect(rel.status).toBe('published');
      });
    });
  });

  describe('Journal Index Page (/journal)', () => {
    it('renders the editorial introduction and publication status', () => {
      render(
        <MemoryRouter initialEntries={['/journal']}>
          <JournalPage />
        </MemoryRouter>,
      );

      expect(screen.getByRole('heading', { name: /essays & field notes/i })).toBeInTheDocument();
      expect(screen.getByText(/critical discourse/i)).toBeInTheDocument();
    });

    it('displays published articles and strictly hides drafts from public index', () => {
      render(
        <MemoryRouter initialEntries={['/journal']}>
          <JournalPage />
        </MemoryRouter>,
      );

      // Published essays are present
      expect(screen.getByText('The Invisible Grid')).toBeInTheDocument();
      expect(screen.getByText('When a Website Becomes an Identity')).toBeInTheDocument();
      expect(screen.getByText('The Case for Less, Done Better')).toBeInTheDocument();

      // Draft article must NOT appear in the index
      expect(screen.queryByText('The Topology of Reading Velocity')).not.toBeInTheDocument();
    });

    it('filters essays dynamically when category spectrum buttons are activated', () => {
      render(
        <MemoryRouter initialEntries={['/journal']}>
          <JournalPage />
        </MemoryRouter>,
      );

      // Filter by "Systemic Design"
      const systemicButton = screen.getByRole('button', { name: /systemic design/i });
      fireEvent.click(systemicButton);

      expect(systemicButton).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByText('The Invisible Grid')).toBeInTheDocument();
      expect(screen.queryByText('When a Website Becomes an Identity')).not.toBeInTheDocument();

      // Reset to "All"
      const allButton = screen.getByRole('button', { name: /all/i });
      fireEvent.click(allButton);

      expect(allButton).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByText('The Invisible Grid')).toBeInTheDocument();
      expect(screen.getByText('When a Website Becomes an Identity')).toBeInTheDocument();
    });
  });

  describe('Article Detail Page (/journal/:slug)', () => {
    it('renders complete typed content blocks for published article', () => {
      render(
        <MemoryRouter initialEntries={['/journal/the-invisible-grid']}>
          <Routes>
            <Route path="/journal/:slug" element={<JournalDetailPage />} />
          </Routes>
        </MemoryRouter>,
      );

      // Header and metadata
      expect(
        screen.getByRole('heading', { name: 'The Invisible Grid', level: 1 }),
      ).toBeInTheDocument();
      expect(screen.getByText('Systemic Design')).toBeInTheDocument();
      expect(screen.getAllByText(/min read/i).length).toBeGreaterThanOrEqual(1);

      // Headings inside content blocks
      expect(
        screen.getByRole('heading', { name: /the fallacy of decorative geometry/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: /restraint as an active agent/i }),
      ).toBeInTheDocument();

      // Blockquote with attribution
      expect(screen.getByText(/the grid does not exist to be seen/i)).toBeInTheDocument();
      expect(screen.getByText(/studio omni field notes, axis 01/i)).toBeInTheDocument();

      // Unordered list
      expect(
        screen.getByText(/negative space must be calculated with the same proportional rigor/i),
      ).toBeInTheDocument();

      // Callout
      expect(screen.getByText('Systemic Axiom')).toBeInTheDocument();

      // Related articles navigation
      expect(
        screen.getByRole('heading', { name: /related critical readings/i }),
      ).toBeInTheDocument();
    });

    it('enforces draft protection by displaying ArticleNotFound for unpublished slugs', () => {
      render(
        <MemoryRouter initialEntries={['/journal/the-topology-of-reading-velocity']}>
          <Routes>
            <Route path="/journal/:slug" element={<JournalDetailPage />} />
          </Routes>
        </MemoryRouter>,
      );

      // Should show ArticleNotFound because draft is not publicly accessible
      expect(screen.getByRole('heading', { name: /essay not found/i })).toBeInTheDocument();
      expect(screen.getByText(/the-topology-of-reading-velocity/i)).toBeInTheDocument();
    });

    it('renders branded ArticleNotFound for nonexistent slugs', () => {
      render(
        <MemoryRouter initialEntries={['/journal/nonexistent-fabricated-essay']}>
          <Routes>
            <Route path="/journal/:slug" element={<JournalDetailPage />} />
          </Routes>
        </MemoryRouter>,
      );

      expect(screen.getByRole('heading', { name: /essay not found/i })).toBeInTheDocument();
      expect(screen.getByText(/nonexistent-fabricated-essay/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /explore available essays/i })).toHaveAttribute(
        'href',
        '/journal',
      );
    });

    it('renders ArticleNotFound standalone component directly', () => {
      render(
        <MemoryRouter>
          <ArticleNotFound slug="test-dummy-essay" />
        </MemoryRouter>,
      );

      expect(screen.getByText('Essay Not Found')).toBeInTheDocument();
      expect(screen.getByText('test-dummy-essay')).toBeInTheDocument();
    });
  });
});
