import { expect } from "@playwright/test";
import Homepage from "./Homepage";

class SearchProduct extends Homepage {
    constructor(page) {
        this.searchField = page.locator('input[name="keyword"]');
        this.searchButton = page.locator('input[name="searchProducts"]');
        this.linkToProductDescription = (productDescription) => page.locator(`tbody a:has-text(${productDescription})`); 
        // this.nameTableData is a function, NOT a locator yet!
        this.nameTableData = (productName) => page.locator(`tbody td:has-text(${productName})`); // Check if the element’s text CONTAINS the given string.
    }

    async searchPet(value){
        await this.searchField.fill(value);
        await this.searchButton.click();
        const nameTableDataLocator = this.nameTableData(value); // The searched value now equals the value passed onto this.nameTableData(productName) function.
    }

    async expectSearchToContainResults() {
        await expect(nameTableDataLocator).toBeVisible(); // If there are any corresponding search results, that data will be shown under the "Name" table.
    }

    async selectRandomProduct() {
        const convertToList = await this.linkToProductDescription.allTextContent(); // Convert all text values to a string.
        const randomValue = convertToList[(Math.floor(Math.random() * convertToList.length))]; // Retrieve a random text string value
        const linkToProductDescriptionLocator = this.linkToProductDescription(randomValue); 
        // Random text value now equals (productDescription) variable. 
        // Assign const to this.nameTableData(productDescription) function so we can now use it as a locator and interact with it.
        await linkToProductDescriptionLocator.click();
    }
}

export default SearchProduct;