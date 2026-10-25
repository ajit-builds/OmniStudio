import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TextLink } from '../components/ui/TextLink.js';
import { ActionLink } from '../components/ui/ActionLink.js';
import { ROUTES, getWorkDetailPath } from '../lib/routePaths.js';

describe('UI Primitives and Route Configuration', () => {
  it('correctly formats route helpers', () => {
    expect(ROUTES.HOME).toBe('/');
    expect(ROUTES.WORK).toBe('/work');
    expect(getWorkDetailPath('project-alfa')).toBe('/work/project-alfa');
  });

  it('renders TextLink as external anchor when href is provided', () => {
    render(
      <TextLink href="https://example.com" variant="vermilion">
        External Link
      </TextLink>,
    );

    const link = screen.getByRole('link', { name: /external link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders ActionLink as a router Link when "to" is provided', () => {
    render(
      <MemoryRouter>
        <ActionLink to="/contact" variant="solid">
          Let’s Talk
        </ActionLink>
      </MemoryRouter>,
    );

    const action = screen.getByRole('link', { name: /let’s talk/i });
    expect(action).toBeInTheDocument();
    expect(action).toHaveAttribute('href', '/contact');
  });

  it('renders ActionLink as button when no navigation prop is passed', () => {
    render(
      <ActionLink variant="outline" type="button">
        Submit Request
      </ActionLink>,
    );

    const button = screen.getByRole('button', { name: /submit request/i });
    expect(button).toBeInTheDocument();
  });
});
