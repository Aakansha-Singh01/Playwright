import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://med-panel-front-stagging.vercel.app/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@serviots.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Serviots@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('button', { name: 'Add New Medicine' }).click();
  await page.getByRole('button', { name: 'Add Medicine' }).click();
  await expect(page.locator("//input[@placeholder='Medicine Name']")).toHaveCSS('border-color', 'rgb(255, 0, 0)');
  await expect(page.locator("//input[@placeholder='Manufacturer']")).toHaveCSS('border-color', 'rgb(255, 0, 0)');
  await expect(page.locator("//input[@placeholder='Weightage']")).toHaveCSS('border-color', 'rgb(255, 0, 0)');
});