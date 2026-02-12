import { test, expect } from '@playwright/test';

test('Explorar locators', async ({ page }) => {
  await page.goto('https://example.com');

  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toBeVisible();
});
