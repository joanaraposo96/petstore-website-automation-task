import { test, expect } from '@playwright/test';
import Homepage from '../classes/Homepage';
import Login from '../classes/Login';

test.describe('Login tests', () => {

  let login;
  let homepage;

  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    homepage = new Homepage(page);

    await homepage.navigateToHomepage();
    await homepage.expectTitle();
  });

  test('login and logout successfuly', async ({ page }) => {
    await homepage.signInOptions();
    await login.logIntoAccount('user96', 'test123');
    await homepage.expectHomepageLoggedIn();
    await login.logOutFromAccount();
    await homepage.expectHomepageLoggedOut();
  });

  test('login with invalid credentials', async ({ page }) => {
    await login.logIntoAccount('user9', 'test1234'); //invalid username + invalid password
    await login.expectLoginErrorMessage();
  });
});