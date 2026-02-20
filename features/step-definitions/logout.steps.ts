import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

const BASE_URL = 'https://the-internet.herokuapp.com';

Given('I am logged in as a valid user', async function (this: CustomWorld) {
  await this.page.goto(`${BASE_URL}/login`);
  await this.page.getByLabel('Username').fill('tomsmith');
  await this.page.getByLabel('Password').fill('SuperSecretPassword!');
  await this.page.getByRole('button', { name: /login/i }).click();

  await expect(this.page).toHaveURL(/secure/);
});

When('I click the Logout button', async function (this: CustomWorld) {
  await this.page.getByRole('link', { name: /logout/i }).click();
});

Then('I should be redirected to the login page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/login/);
  await expect(this.page.locator('h2')).toHaveText(/Login Page/);
});