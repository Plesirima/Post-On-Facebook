// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Expect a title "to contain" a substring.
  const seachFieldUSER = page.locator('#email');
  const seachFieldPW = page.locator('#pass');

  await seachFieldUSER.fill('zimplesirima@gmail.com');
  await seachFieldPW.fill('zimple@sirima');

    // Click the Login
    await page.getByRole('button', { name: 'Log in' }).click();
    // Click the Home
    await page.getByRole('link', { name: 'Facebook' }).click();
     // Click the POST
     await page.getByRole('button', { name: "What's on your mind, สิริมา?" }).click();

    await page.getByLabel('What\'s on your mind, สิริมา?').fill('Hello Playwright');
    await page.getByLabel('Post', {exact: true} ).press('Enter');


});












