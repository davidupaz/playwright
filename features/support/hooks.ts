import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  // 1) Browser: la app (Chromium)
  this.browser = await chromium.launch({ headless: false });

  // 2) Context: sesión aislada (cookies/cache aislados por escenario)
  this.context = await this.browser.newContext();

  // 3) Page: una pestaña
  this.page = await this.context.newPage();

  // timeouts de Playwright (acciones/locators/navigation)
  this.page.setDefaultTimeout(30_000);
  this.page.setDefaultNavigationTimeout(30_000);
});

After(async function (this: CustomWorld) {
  await this.page?.close().catch(() => {});
  await this.context?.close().catch(() => {});
  await this.browser?.close().catch(() => {});
});