import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

const BASE_URL = 'https://the-internet.herokuapp.com';

Given('I am on the Add Remove Elements page', async function (this: CustomWorld) {
  await this.page.goto(`${BASE_URL}/add_remove_elements/`);
});

When('I click {string} {int} times', async function (this: CustomWorld, buttonName: string, times: number) {
  const btn = this.page.getByRole('button', { name: new RegExp(`^${buttonName}$`, 'i') });
  for (let i = 0; i < times; i++) {
    await btn.click();
  }
});

Then('I should see {int} {string} buttons', async function (this: CustomWorld, count: number, buttonName: string) {
  const buttons = this.page.getByRole('button', { name: new RegExp(`^${buttonName}$`, 'i') });
  await expect(buttons).toHaveCount(count);
});

When('I click the first {string} button', async function (this: CustomWorld, buttonName: string) {
  const buttons = this.page.getByRole('button', { name: new RegExp(`^${buttonName}$`, 'i') });
  await buttons.first().click();
});