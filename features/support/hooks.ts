import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

setDefaultTimeout(30_000); 
  // timeout for cucumber steps
Before(async function (this: CustomWorld) {
  // 1) Browser: app (Chromium)
  this.browser = await chromium.launch({ headless: false });

  // 2) Context: isolated session
  this.context = await this.browser.newContext();

  // 3) Page: one tab
  this.page = await this.context.newPage();

  // Playwright timeouts for (actions/locators/navigation)
  this.page.setDefaultTimeout(30_000);
  this.page.setDefaultNavigationTimeout(30_000);
});

After(async function (this: CustomWorld) {
  await this.page?.close().catch(() => {});
  await this.context?.close().catch(() => {});
  await this.browser?.close().catch(() => {});
});