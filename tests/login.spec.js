import { test, expect } from '@playwright/test';
import Homepage from '../classes/Homepage';
import Login from '../classes/Login';

test("login and logout successfuly", async ({ page }) => {
  const login = new Login(page);
  const homepage = new Homepage(page);
    
  await homepage.navigateToHomepage();
  await expect(homepage.page).toHaveTitle("JPetStore Demo");
  await login.logIntoAccount("user96", "test123");
  await homepage.expectLoggedIn();
  await login.logOutFromAccount();
  await homepage.expectLoggedOut();
});