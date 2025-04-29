import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@serviots.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Serviots@123');
  await page.getByText('LoginEmail *Password *').click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Search medicineName...' }).click();
  await page.getByRole('textbox', { name: 'Search medicineName...' }).fill('testing');
  await page.getByRole('link').getByRole('button').click();
  await page.locator('.ant-image-mask-info').first().click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'Log out' }).click();
});