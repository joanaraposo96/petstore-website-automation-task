import Homepage from "./Homepage";

class Login extends Homepage {
    constructor(page) {
        super(page);
        
            this.username = page.locator('input[name="username"]');
            this.password = page.locator('input[name="password"]');
            this.buttonLogin = page.locator('input[name="signon"]');
            this.loginErrorMessage = page.locator('text=Invalid username or password.  Signon failed.');
    }

    async logIntoAccount(username, password) {
        await this.buttonSignIn.click();
        await this.password.clear();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.buttonLogin.click();
    }

    async logOutFromAccount() {
        await this.buttonSignOut.click();
    }

    async loginSuccessful() {
        await this.expectLoggedIn();
    }
}

export default Login