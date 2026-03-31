import Homepage from "./Homepage";

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
            this.myBanner = page.locator('input[name="account.bannerOption"]');
            this.saveAccountInformation = page.locator('input[name="newAccount"]');
    }

    async clickToRegister() {
        await this.buttonRegister.click();
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
        await this.username.fill(username + Date.now());
        await this.newPassword.fill(password);
        await this.repeatedPassword.fill(repeatedPassword);
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.phone.fill(phone);
        await this.address1.fill(address1);
        await this.address2.fill(address2);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zip.fill(zip);
        await this.country.fill(country);

        //select random option except for 'english' default value using playwright selectOption method
        const allValues = await this.language.locator('option').allTextContents();
        const filtered = allValues.filter(value => value !== allValues[0]);
        const randomValue = filtered[Math.floor(Math.random() * filtered.length)];
        const retrieveIndex = allValues.indexOf(randomValue);
        await this.language.selectOption({ index: retrieveIndex });

        //select random option except for 'FISH' default value using playwright selectOption method
        const convertLocatorsToStrings = await this.category.locator('option').allTextContents(); // convert locators to an array of strings ['FISH', 'DOGS', 'REPTILES', CATS', 'DOGS']
        const filteredArray = convertLocatorsToStrings.filter(value => value !== convertLocatorsToStrings[0]); // exlcudes 'FISH' from array -> [DOGS', 'REPTILES', CATS', 'DOGS']
        const randomStringFromFilteredArray = filteredArray[Math.floor(Math.random() * filteredArray.length)]; // selects random string from array e.g., 'CATS'
        const retrieveIndexFromOriginalArray = convertLocatorsToStrings.indexOf(randomStringFromFilteredArray); // search for the random string index in original array - > [3]
        await this.category.selectOption({ index: retrieveIndexFromOriginalArray }); //selects element in position [3]

        await this.myList.check();
        await this.myBanner.check();
        await this.saveAccountInformation.click();
    }
}

export default Register