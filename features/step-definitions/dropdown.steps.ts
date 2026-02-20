import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

const BASE_URL = 'https://the-internet.herokuapp.com';

Given('I am on the Dropdown page', async function (this: CustomWorld) {
  await this.page.goto(`${BASE_URL}/dropdown`);
});

When('I select {string} from the dropdown', async function (this: CustomWorld, option: string) {
  await this.page.locator('#dropdown').selectOption({ label: option });
});

Then('the dropdown value should be {string}', async function (this: CustomWorld, option: string) {
  // Values are "1" and "2" but checking by selected label is clearer for BDD
  const selected = this.page.locator('#dropdown option:checked');
  await expect(selected).toHaveText(option);
});