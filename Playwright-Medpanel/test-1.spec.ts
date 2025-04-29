import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://med-panel-front-stagging.vercel.app/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('admin@serviots.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Serviots@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Search medicineName...' }).click();
  await page.getByRole('textbox', { name: 'Search medicineName...' }).fill('testing');
  await page.getByRole('textbox', { name: 'Search medicineName...' }).press('Enter');
  await page.locator('//*[@id="root"]/div/div/div/div[3]/div/div/div/div/div[2]/table/tbody/tr[2]/td[7]/div/a/button/span').click();
  await page.locator("//html/body/div/div/div[3]/form/div[1]/div[3]/div/div/div/div/span/span[1]/input").click();
  await page.locator("//html/body/div/div/div[3]/form/div[1]/div[3]/div/div/div/div/span/span[1]/input").fill('Johnson & Johnson Pvt Ltd');
  await page.getByRole('button', { name: 'Update Medicine' }).click();
  await page.getByRole('button', { name: 'Log out' }).click();
  await page.locator('div').filter({ hasText: 'LoginEmail *Password *' }).nth(1).click();
});