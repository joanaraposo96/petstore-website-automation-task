import { expect } from "@playwright/test";

class Homepage {
    page;
    buttonSignOut;
    buttonMyAccount;

    constructor(page) {
        this.page = page;
        this.buttonSignOut = page.locator('text=Sign Out');
        this.buttonMyAccount = page.locator('text=My Account');
        this.buttonSignIn = page.locator('text=Sign In');
    }

    async navigateToHomepage() {
        await this.page.goto("https://petstore.octoperf.com/actions/Catalog.action");
    }

    async expectLoggedIn() {
        await expect(this.buttonSignOut).toBeVisible();
        await expect(this.buttonMyAccount).toBeVisible();
    }

    async expectLoggedOut() {
        await expect(this.buttonSignIn).toBeVisible();
        await expect(this.buttonMyAccount).not.toBeVisible();
    }
}

export default Homepage