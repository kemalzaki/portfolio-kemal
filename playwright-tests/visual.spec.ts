import { test, expect } from "@playwright/test";

test("Hero visual regression", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('[data-testid="hero"]'))
    .toHaveScreenshot("hero.png");
});
