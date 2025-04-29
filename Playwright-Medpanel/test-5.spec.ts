import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://med-panel-front-stagging.vercel.app/login');

  // Login
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@serviots.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Serviots@123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // Navigate to Add Medicine page
  await page.getByRole('button', { name: 'Add New Medicine' }).click();
  
  // Try submitting without filling the form
  await page.getByRole('button', { name: 'Add Medicine' }).click();

  // Wait for validation messages to appear
  await page.waitForSelector("text=Medicine name is required", { timeout: 5000 });
  await page.waitForSelector("text=Manufacturer is required", { timeout: 5000 });
  await page.waitForSelector("text=Weightage is required", { timeout: 5000 });

  // Validate that error messages are displayed
  await expect(page.locator("text=Medicine name is required")).toBeVisible();
  await expect(page.locator("text=Manufacturer is required")).toBeVisible();
  await expect(page.locator("text=Weightage is required")).toBeVisible();

});
