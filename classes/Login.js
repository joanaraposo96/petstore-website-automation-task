class Login {
    page;
    username;
    password;
    buttonSignIn;
    buttonSignOut;

    constructor(page) {
        this.page = page;
        this.buttonSignIn = page.locator('text=Sign In');
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.buttonLogin = page.locator('input[name="signon"]');
        this.buttonSignOut = this.buttonSignOut = page.locator('text=Sign Out');
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
}

export default Login