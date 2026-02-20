import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

const BASE_URL = 'https://the-internet.herokuapp.com';

Given('I open Dynamic Loading {string}', async function (this: CustomWorld, example: string) {
  // Feature uses "Example 1" / "Example 2"
  const normalized = example.trim().toLowerCase();
  const path = normalized.includes('2') ? '/dynamic_loading/2' : '/dynamic_loading/1';
  await this.page.goto(`${BASE_URL}${path}`);
});

When('I start the loading process', async function (this: CustomWorld) {
  await this.page.getByRole('button', { name: /start/i }).click();
});

Then('I should eventually see the loaded text {string}', async function (this: CustomWorld, text: string) {
  const finish = this.page.locator('#finish');
  await expect(finish).toBeVisible({ timeout: 15000 });
  await expect(finish).toContainText(text);
});