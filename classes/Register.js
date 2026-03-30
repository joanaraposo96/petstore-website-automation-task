import Homepage from "./Homepage";
import { randomUUID } from 'crypto';

class Register extends Homepage {
    constructor(page) {
        super(page);

            this.buttonRegister = page.locator('text=Register Now!');
            this.username = page.locator('input[name="username"]');
            this.newPassword = page.locator('input[name="password"]');
            this.repeatedPassword = page.locator('input[name="repeatedPassword"]');
            this.firstName = page.locator('input[name="account.firstName"]');
            this.lastName = page.locator('input[name="account.lastName"]');
            this.email = page.locator('input[name="account.email"]');
            this.phone = page.locator('input[name="account.phone"]');
            this.address1 = page.locator('input[name="account.address1"]');
            this.address2 = page.locator('input[name="account.address2"]');
            this.city = page.locator('input[name="account.city"]');
            this.state = page.locator('input[name="account.state"]');
            this.zip = page.locator('input[name="account.zip"]');
            this.country = page.locator('input[name="account.country"]');
            this.language = page.locator('select[name="account.languagePreference"]');
            this.category = page.locator('select[name="account.favouriteCategoryId"]');
            this.myList = page.locator('input[name="account.listOption"]');
            this.myBanner = page.locator('input[nmame="account.bannerOption"]');
    }

    async clickToRegister() {
        this.buttonRegister.click();
    }

    async createUserAccount(
        username, 
        password, 
        repeatedPassword, 
        firstName, 
        lastName, 
        email, 
        phone, 
        address1, 
        address2, 
        city, 
        state, 
        zip, 
        country
    ) {
        await this.username.fill(username + randomUUID());
        await this.newPassword.fill(password);
        await his.repeatedPassword.fill(repeatedPassword);
        await this.firstName.fill(firstName);
        await his.lastName.fill(lastName);
        await this.email.fill(email);
        await this.phone.fill(phone);
        await this.address1.fill(address1);
        await this.address2.fill(address2);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zip.fill(zip);
        await this.country.fill(country);

        //select random option execept for default value -> 'japanese'
        const options1 = await this.language.locator('option').filter({ hasNotText: 'english' }); //stores locator options
        const count1 = await options1.count();
        const randomIndex1 = Math.floor(Math.random() * count1);
        options1.nth(randomIndex1).click();

        //select random option execept for default value -> 'DOGS', 'REPTILES', 'CATS' or 'BIRDS'
        const options2 = await this.category.locator('option').filter({ hasNotText: 'FISH'});
        const count2 = await options2.count();
        const randomIndex2 = Math.floor(Math.random() * count2);
        options2.nth(randomIndex2).click();
    }
}

export default Register