import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

const BASE_URL = 'https://the-internet.herokuapp.com';

//
// Background
//
Given('I am on the Form Authentication page', async function (this: CustomWorld) {
  await this.page.goto(`${BASE_URL}/login`);
});

//
// Positive + Negative login step
//
When(
  'I login with username {string} and password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: /login/i }).click();
  }
);

//
// Positive assertion
//
Then(
  'I should be redirected to the Secure Area',
  async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(/secure/);
    await expect(this.page.locator('h2')).toHaveText(/Secure Area/);
  }
);

Then(
  'I should see a flash message containing {string}',
  async function (this: CustomWorld, expectedMessage: string) {
    const flash = this.page.locator('#flash');
    await expect(flash).toBeVisible();
    await expect(flash).toContainText(expectedMessage);
  }
);

//
// Negative assertion
//
Then(
  'I should remain on the login page',
  async function (this: CustomWorld) {
    await expect(this.page).toHaveURL(/login/);
    await expect(this.page.locator('h2')).toHaveText(/Login Page/);
  }
);