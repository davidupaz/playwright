import { Given, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given("I navigate to {string}", async function (url: string) {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);
});

Then("I should see a level 1 heading", async function () {
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toBeVisible();
  await browser.close();
});