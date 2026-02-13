import { Given, When } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('I go to the login page', async function (this: CustomWorld) {
  await this.page.goto('https://the-internet.herokuapp.com/login');
});

When('I login with valid credentials', async function (this: CustomWorld) {

  await this.page.getByLabel('Username').fill('tomsmith');

  await this.page.getByLabel('Password').fill('SuperSecretPassword!');

  await this.page.getByRole('button', { name: 'Login' }).click();
});

