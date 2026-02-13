import { setWorldConstructor } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from 'playwright';

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  // Para guardar datos del escenario (ej: usuario creado, ids, etc.)
  state: Record<string, any> = {};
}