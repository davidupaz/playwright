import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';
import path from 'path';
import fs from 'fs';

const BASE_URL = 'https://the-internet.herokuapp.com';

Given('I am on the File Upload page', async function (this: CustomWorld) {
  await this.page.goto(`${BASE_URL}/upload`);
});

When('I upload the file:', async function (this: CustomWorld, table: DataTable) {
  const rows = table.hashes();
  const relPath = rows[0]?.path;
  if (!relPath) throw new Error('DataTable must include a "path" column with at least one row.');

  const absolutePath = path.resolve(process.cwd(), relPath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}. Make sure it exists in your repo (e.g., fixtures/test.txt).`);
  }

  await this.page.locator('#file-upload').setInputFiles(absolutePath);
});

When('I submit the upload', async function (this: CustomWorld) {
  await this.page.getByRole('button', { name: /upload/i }).click();
});

Then('I should see an uploaded file name {string}', async function (this: CustomWorld, fileName: string) {
  await expect(this.page.locator('#uploaded-files')).toHaveText(fileName);
});