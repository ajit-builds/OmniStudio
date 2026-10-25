import { test, expect } from '@playwright/test';

test.describe('Studio Omni Shell & Primary Navigation', () => {
  test('renders homepage with brand typography, signature hero, and semantic landmarks', async ({
    page,
  }) => {
    await page.goto('/');

    // Check brand wordmark
    const wordmark = page.locator('header a[aria-label="Studio Omni — Home"]');
    await expect(wordmark).toBeVisible();

    // Check main headlines
    await expect(page.locator('h1')).toContainText(/we shape/i);
    await expect(
      page.getByText('Through rigorous, design-first systems.', { exact: true }),
    ).toBeVisible();

    // Check footer exists
    await expect(page.locator('footer[role="contentinfo"]')).toBeVisible();
  });

  test('navigates cleanly through all primary routes and updates document titles', async ({
    page,
  }) => {
    await page.goto('/');

    // Navigate to Work
    await page.click('header nav >> text=Work');
    await expect(page).toHaveURL('/work');
    await expect(page.locator('h1')).toContainText(/disciplines in tension/i);

    // Navigate to About
    await page.click('header nav >> text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText(/we shape the invisible/i);

    // Navigate to Services
    await page.click('header nav >> text=Services');
    await expect(page).toHaveURL('/services');
    await expect(page.locator('h1')).toContainText(/discipline catalog/i);

    // Navigate to Journal
    await page.click('header nav >> text=Journal');
    await expect(page).toHaveURL('/journal');
    await expect(page.locator('h1')).toContainText(/essays & field notes/i);

    // Navigate to Contact
    await page.click('header a[aria-label="Initiate contact with Studio Omni"]');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText(/initiate dialogue/i);

    // Return to home via wordmark
    await page.click('header a[aria-label="Studio Omni — Home"]');
    await expect(page).toHaveURL('/');
  });

  test('navigates to case study detail and adjacent readings', async ({ page }) => {
    // Project detail page
    await page.goto('/work/aether-form');
    await expect(page.locator('h1')).toHaveText('Aether Form');
    await expect(page.getByText('Identity Systems').first()).toBeVisible();

    // Journal article detail page
    await page.goto('/journal/the-invisible-grid');
    await expect(page.locator('h1')).toHaveText('The Invisible Grid');
    await expect(page.getByText('Systemic Design').first()).toBeVisible();
  });

  test('displays editorial 404 page for unmatched coordinates', async ({ page }) => {
    await page.goto('/coordinate-does-not-exist');
    await expect(page.locator('h1')).toContainText('404');
    await expect(page.locator('text=The requested coordinate does not exist.')).toBeVisible();
    await expect(page.getByRole('link', { name: /return to overview/i })).toBeVisible();
  });

  test('validates required fields on contact submission', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('h1')).toContainText(/initiate dialogue/i);

    // Click submit empty
    await page.click('button[type="submit"]');

    // Field-level error messages should appear
    await expect(page.getByText('Name is required')).toBeVisible();
    await expect(page.getByText('Email address is required')).toBeVisible();
    await expect(page.getByText('Message is required')).toBeVisible();
  });
});
