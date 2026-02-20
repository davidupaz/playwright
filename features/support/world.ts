import { setWorldConstructor } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from 'playwright';

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  // To store scenario data (e.g., created user, IDs, etc.)
  state: Record<string, any> = {};
}