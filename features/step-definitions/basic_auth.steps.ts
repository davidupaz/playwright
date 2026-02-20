import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

const HOST = 'the-internet.herokuapp.com';

When(
  'I open the Basic Auth page with username {string} and password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    // Embed credentials in the URL for basic auth
    await this.page.goto(`https://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${HOST}/basic_auth`);
  }
);

Then('I should see a page message containing {string}', async function (this: CustomWorld, message: string) {
  await expect(this.page.locator('.example')).toContainText(message);
});