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
    await homepage.expectTitle();
  });

  test('Register a new Account', async ({ page }) => {
    await homepage.buttonSignIn.click();
    await register.clickToRegister();
    await register.createUserAccount(
      'user', 
      'pa$$w0rd', 
      'pa$$w0rd', 
      'firstName',
      'lastName',
      'email@domain.com',
      '000111222',
      'Adress1',
      'Address2', 
      'City',
      'State',
      '000-111',
      'Country'
    )
    await homepage.expectHomepageLoggedOut();
  });
});