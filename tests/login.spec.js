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
    await expect(homepage.page).toHaveTitle("JPetStore Demo");

  });

  test('login and logout successfuly', async ({ page }) => {
    await login.logIntoAccount("user96", "test123");
    await homepage.expectLoggedIn();
    await login.logOutFromAccount();
    await homepage.expectLoggedOut();

  });

  test('login with invalid credentials', async ({ page }) => {

    await login.logIntoAccount("user96", "test1234"); //wrong password
    
  });
});