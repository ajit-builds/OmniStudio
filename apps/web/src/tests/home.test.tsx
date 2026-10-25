import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SELECTED_PROJECTS } from '../content/projects.js';
import { JOURNAL_PREVIEWS } from '../content/articles.js';
import { CAPABILITIES } from '../content/capabilities.js';
import { PROCESS_STAGES } from '../content/process.js';
import { SelectedWorkSection } from '../components/home/SelectedWorkSection.js';
import { PhilosophySection } from '../components/home/PhilosophySection.js';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection.js';
import { ProcessSection } from '../components/home/ProcessSection.js';
import { JournalPreviewSection } from '../components/home/JournalPreviewSection.js';
import { ContactInvitationSection } from '../components/home/ContactInvitationSection.js';

describe('Studio Omni Homepage Foundation & Content', () => {
  it('validates selected projects content specifications', () => {
    expect(SELECTED_PROJECTS.length).toBeGreaterThanOrEqual(4);
    SELECTED_PROJECTS.forEach((proj) => {
      expect(proj.title).toBeDefined();
      expect(proj.slug).toBeDefined();
      expect(proj.discipline).toBeDefined();
      expect(proj.isConcept).toBe(true); // Must honestly label concept work
    });
  });

  it('validates journal previews specifications', () => {
    expect(JOURNAL_PREVIEWS.length).toBe(3);
    const titles = JOURNAL_PREVIEWS.map((a) => a.title);
    expect(titles).toContain('The Invisible Grid');
    expect(titles).toContain('When a Website Becomes an Identity');
    expect(titles).toContain('The Case for Less, Done Better');
  });

  it('validates 3 connected capabilities', () => {
    expect(CAPABILITIES.length).toBe(3);
    const titles = CAPABILITIES.map((c) => c.title);
    expect(titles).toContain('Identity Systems');
    expect(titles).toContain('Digital Experiences');
    expect(titles).toContain('Editorial & Campaigns');
  });

  it('validates 4-stage process methodology', () => {
    expect(PROCESS_STAGES.length).toBe(4);
    const titles = PROCESS_STAGES.map((s) => s.title);
    expect(titles).toEqual(['Discover', 'Define', 'Construct', 'Refine']);
  });

  it('renders SelectedWorkSection with concept labeling and project links', () => {
    render(
      <MemoryRouter>
        <SelectedWorkSection />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /form follows system/i })).toBeInTheDocument();
    expect(
      screen.getByText(/all entries represent self-directed conceptual systems/i),
    ).toBeInTheDocument();
    expect(screen.getByText('Aether Form')).toBeInTheDocument();
  });

  it('renders PhilosophySection with the core manifesto', () => {
    render(<PhilosophySection />);
    expect(screen.getByText(/meaningful design emerges from the systems/i)).toBeInTheDocument();
    expect(screen.getByText('The Invisible Grid')).toBeInTheDocument();
    expect(screen.getByText('Material Restraint')).toBeInTheDocument();
    expect(screen.getByText('Enduring Systems')).toBeInTheDocument();
  });

  it('renders CapabilitiesSection with all three disciplines', () => {
    render(
      <MemoryRouter>
        <CapabilitiesSection />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /capabilities & systems/i })).toBeInTheDocument();
    expect(screen.getByText('Identity Systems')).toBeInTheDocument();
    expect(screen.getByText('Digital Experiences')).toBeInTheDocument();
    expect(screen.getByText('Editorial & Campaigns')).toBeInTheDocument();
  });

  it('renders ProcessSection with interactive stage tabs', () => {
    render(<ProcessSection />);
    expect(screen.getByRole('heading', { name: /structure to expression/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /discover/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /define/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /construct/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /refine/i })).toBeInTheDocument();
  });

  it('renders JournalPreviewSection with three essays', () => {
    render(
      <MemoryRouter>
        <JournalPreviewSection />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /essays & field notes/i })).toBeInTheDocument();
    expect(screen.getByText('The Invisible Grid')).toBeInTheDocument();
    expect(screen.getByText('When a Website Becomes an Identity')).toBeInTheDocument();
    expect(screen.getByText('The Case for Less, Done Better')).toBeInTheDocument();
  });

  it('renders ContactInvitationSection with clear dialogue action', () => {
    render(
      <MemoryRouter>
        <ContactInvitationSection />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /shape your next system/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /initiate contact with studio omni/i }),
    ).toHaveAttribute('href', '/contact');
  });
});
