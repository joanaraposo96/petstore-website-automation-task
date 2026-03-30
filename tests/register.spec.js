import { test, expect } from '@playwright/test';
import Homepage from '../classes/Homepage';
import Register from '../classes/Register';

test.describe('Register Account', () => {
  let homepage;
  let register;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    register = new Register(page);

    await homepage.navigateToHomepage();
    await expect(homepage.page).toHaveTitle('JPetStore Demo');
  });

  test('Register a new Account', async ({ page }) => {
    await homepage.buttonSignIn.click();
    await register.clickToRegister();
  });
});