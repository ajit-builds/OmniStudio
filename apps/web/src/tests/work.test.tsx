import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import {
  ALL_PROJECTS,
  SELECTED_PROJECTS,
  getProjectBySlug,
  getRelatedProjects,
  getProjectsByCategory,
  validateProjectData,
} from '../content/projects.js';
import { WorkPage } from '../pages/WorkPage.js';
import { WorkDetailPage } from '../pages/WorkDetailPage.js';
import { ProjectNotFound } from '../components/work/ProjectNotFound.js';

describe('Studio Omni Portfolio & Case Studies Architecture', () => {
  describe('Project Data Invariants & Queries', () => {
    it('passes all runtime data validation invariants', () => {
      const validation = validateProjectData();
      expect(validation.valid).toBe(true);
      expect(validation.errors).toHaveLength(0);
    });

    it('ensures all projects have unique slugs and valid disciplines', () => {
      const slugs = ALL_PROJECTS.map((p) => p.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(ALL_PROJECTS.length);
      expect(ALL_PROJECTS.length).toBeGreaterThanOrEqual(6);
    });

    it('honestly labels all projects as concept systems', () => {
      ALL_PROJECTS.forEach((project) => {
        expect(project.conceptProject).toBe(true);
        expect(project.isConcept).toBe(true);
      });
    });

    it('retrieves project by slug accurately', () => {
      const aether = getProjectBySlug('aether-form');
      expect(aether).toBeDefined();
      expect(aether?.title).toBe('Aether Form');
      expect(aether?.category).toBe('Identity Systems');

      const nonexistent = getProjectBySlug('unknown-fabricated-project');
      expect(nonexistent).toBeUndefined();
    });

    it('returns related projects that strictly exclude the current project', () => {
      ALL_PROJECTS.forEach((project) => {
        const related = getRelatedProjects(project, 2);
        expect(related.length).toBeGreaterThanOrEqual(1);
        related.forEach((rel) => {
          expect(rel.slug).not.toBe(project.slug);
          expect(ALL_PROJECTS.some((p) => p.slug === rel.slug)).toBe(true);
        });
      });
    });

    it('correctly filters projects by category', () => {
      const all = getProjectsByCategory('All');
      expect(all).toHaveLength(ALL_PROJECTS.length);

      const identity = getProjectsByCategory('Identity Systems');
      expect(identity.length).toBeGreaterThanOrEqual(2);
      identity.forEach((p) => expect(p.category).toBe('Identity Systems'));

      const digital = getProjectsByCategory('Digital Experiences');
      expect(digital.length).toBeGreaterThanOrEqual(2);
      digital.forEach((p) => expect(p.category).toBe('Digital Experiences'));

      const editorial = getProjectsByCategory('Editorial & Campaigns');
      expect(editorial.length).toBeGreaterThanOrEqual(2);
      editorial.forEach((p) => expect(p.category).toBe('Editorial & Campaigns'));
    });

    it('featured projects subset matches homepage expectations', () => {
      expect(SELECTED_PROJECTS.length).toBe(4);
      SELECTED_PROJECTS.forEach((p) => {
        expect(p.featured).toBe(true);
      });
    });
  });

  describe('Work Index Page (/work)', () => {
    it('renders the editorial introduction and filter navigation', () => {
      render(
        <MemoryRouter initialEntries={['/work']}>
          <WorkPage />
        </MemoryRouter>,
      );

      expect(screen.getByRole('heading', { name: /disciplines in tension/i })).toBeInTheDocument();
      expect(
        screen.getByRole('navigation', { name: /portfolio discipline filters/i }),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /filter by all/i })).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /filter by identity systems/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /filter by digital experiences/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /filter by editorial & campaigns/i }),
      ).toBeInTheDocument();
    });

    it('filters projects dynamically when category buttons are clicked', () => {
      render(
        <MemoryRouter initialEntries={['/work']}>
          <WorkPage />
        </MemoryRouter>,
      );

      // Initially shows all projects
      expect(screen.getByText('Aether Form')).toBeInTheDocument();
      expect(screen.getByText('Katalog Editorial')).toBeInTheDocument();
      expect(screen.getByText('Monolith Grid')).toBeInTheDocument();

      // Click "Identity Systems" filter
      const identityBtn = screen.getByRole('button', { name: /filter by identity systems/i });
      fireEvent.click(identityBtn);

      expect(identityBtn).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByText('Aether Form')).toBeInTheDocument();
      expect(screen.getByText('Strata System')).toBeInTheDocument();
      expect(screen.queryByText('Katalog Editorial')).not.toBeInTheDocument();

      // Return to All
      const allBtn = screen.getByRole('button', { name: /filter by all/i });
      fireEvent.click(allBtn);
      expect(allBtn).toHaveAttribute('aria-pressed', 'true');
      expect(screen.getByText('Katalog Editorial')).toBeInTheDocument();
    });
  });

  describe('Project Detail Page (/work/:slug)', () => {
    it('renders complete case study narrative for valid project slug', () => {
      render(
        <MemoryRouter initialEntries={['/work/aether-form']}>
          <Routes>
            <Route path="/work/:slug" element={<WorkDetailPage />} />
          </Routes>
        </MemoryRouter>,
      );

      // Cover
      expect(screen.getByRole('heading', { name: 'Aether Form', level: 1 })).toBeInTheDocument();
      expect(screen.getByText(/self-directed conceptual system/i)).toBeInTheDocument();

      // Overview
      expect(screen.getByText(/the architectural challenge/i)).toBeInTheDocument();
      expect(screen.getByText(/strategic system approach/i)).toBeInTheDocument();

      // Insight
      expect(screen.getByText(/the central structural insight/i)).toBeInTheDocument();

      // System Specs
      expect(
        screen.getByRole('heading', { name: /systemic grammar & rules/i }),
      ).toBeInTheDocument();
      expect(screen.getByText('Antonio Bold / Condensed Monolithic Titlecase')).toBeInTheDocument();

      // Outcome
      expect(
        screen.getByRole('heading', { name: /aether form \/ systemic validity/i }),
      ).toBeInTheDocument();

      // Related
      expect(screen.getByRole('heading', { name: /parallel design systems/i })).toBeInTheDocument();
    });

    it('renders polished not-found state for nonexistent project slug', () => {
      render(
        <MemoryRouter initialEntries={['/work/nonexistent-system-slug']}>
          <Routes>
            <Route path="/work/:slug" element={<WorkDetailPage />} />
          </Routes>
        </MemoryRouter>,
      );

      expect(screen.getByRole('heading', { name: /project not found/i })).toBeInTheDocument();
      expect(screen.getByText(/nonexistent-system-slug/i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /explore available portfolio/i })).toHaveAttribute(
        'href',
        '/work',
      );
      expect(screen.getByRole('link', { name: /return to studio homepage/i })).toHaveAttribute(
        'href',
        '/',
      );
    });

    it('renders ProjectNotFound standalone component directly', () => {
      render(
        <MemoryRouter>
          <ProjectNotFound slug="test-dummy-slug" />
        </MemoryRouter>,
      );
      expect(screen.getByText('Project Not Found')).toBeInTheDocument();
      expect(screen.getByText('test-dummy-slug')).toBeInTheDocument();
    });
  });
});
