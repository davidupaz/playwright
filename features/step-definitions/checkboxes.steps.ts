import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

const BASE_URL = 'https://the-internet.herokuapp.com';

function checkboxLocator(world: CustomWorld, index1Based: number) {
  // page has 2 checkboxes inside #checkboxes
  return world.page.locator('#checkboxes input[type="checkbox"]').nth(index1Based - 1);
}

Given('I am on the Checkboxes page', async function (this: CustomWorld) {
  await this.page.goto(`${BASE_URL}/checkboxes`);
});

Then('checkbox {int} should be unchecked', async function (this: CustomWorld, n: number) {
  await expect(checkboxLocator(this, n)).not.toBeChecked();
});

Then('checkbox {int} should be checked', async function (this: CustomWorld, n: number) {
  await expect(checkboxLocator(this, n)).toBeChecked();
});

When('I set checkbox {int} to {string}', async function (this: CustomWorld, n: number, state: string) {
  const desired = state.toLowerCase() === 'checked';
  await checkboxLocator(this, n).setChecked(desired);
});