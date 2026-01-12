import { test, expect } from '@playwright/test';

test('Homepage loads correctly', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/React|Portfolio/i);
});

test('Hero section visible', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByText(/Saya developer/i)
  ).toBeVisible();
});

test('Navbar exists', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.locator('nav')
  ).toBeVisible();
});
