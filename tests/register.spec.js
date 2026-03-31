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
    await homepage.signInOptions();
    await register.clickToRegister();
    await register.createUserAccount(
      'user', //usermame
      'pa$$w0rd', //password
      'pa$$w0rd', //repeated password
      'firstName', //first name
      'lastName', //last name
      'email@domain.com', //email
      '000111222', //phone
      'Adress1', //address 1
      'Address2', //address 2
      'City', //city
      'State', //state
      '000-111', //zip code
      'Country' //country
    )
    await homepage.expectHomepageLoggedOut();
  });
});