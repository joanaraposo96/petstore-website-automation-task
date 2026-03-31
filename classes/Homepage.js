import { expect } from "@playwright/test";

class Homepage {
    constructor(page) {
        this.page = page;
        this.buttonSignOut = page.locator('text=Sign Out');
        this.buttonMyAccount = page.locator('text=My Account');
        this.buttonSignIn = page.locator('text=Sign In');
        this.welcomeMessage = page.locator('div[id="WelcomeContent"]');
    }

    async navigateToHomepage() {
        await this.page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    }

    async expectTitle() {
        await expect(this.page).toHaveTitle('JPetStore Demo');
    }

    async signInOptions() {
        await this.buttonSignIn.click();
    }

    async expectHomepageLoggedIn() {
        await expect(this.welcomeMessage).toBeVisible();
        await expect(this.buttonSignOut).toBeVisible();
        await expect(this.buttonMyAccount).toBeVisible();
    }

    async expectHomepageLoggedOut() {
        await expect(this.welcomeMessage).not.toBeVisible();
        await expect(this.buttonSignIn).toBeVisible();
        await expect(this.buttonMyAccount).not.toBeVisible();
    }
}

export default Homepage