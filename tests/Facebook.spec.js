// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  // Step 1 :: go to search Facebook.
  await test.step('Step 1 :: go to search page', async () => {
   await page.goto('https://www.facebook.com/');
  });

  // Step 2 :: Login Facebook.
  await test.step('Step 2 :: Login Facebook', async () => {
   const seachFieldUSER = page.locator('#email');
   const seachFieldPW = page.locator('#pass');
   await seachFieldUSER.fill('zimplesirima@gmail.com');
   await seachFieldPW.fill('zimple@sirima');
   await page.getByRole('button', { name: 'Log in' }).click();
  });

    // Step 2 :: Post on Facebook.
  await test.step('Step 3 :: Post on Facebook', async () => {
    await page.getByRole('link', { name: 'Facebook' }).click();
    await page.getByRole('button', { name: "What's on your mind, สิริมา?" }).click();
    await page.getByLabel('What\'s on your mind, สิริมา?').fill('Hello Playwright!');
    await page.getByLabel('Post', {exact: true} ).press('Enter');
  });

});












