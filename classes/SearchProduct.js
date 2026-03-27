import { expect } from "@playwright/test";

class SearchProduct {
    page;
    searchField;
    searchButton;
    nameTableData;
    searchedValue;
    descriptionTableData;
    randomSelectedItem;

    constructor(page) {
        this.page = page;
        this.searchField = page.getByRole('textbox');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.nameTableData = page.locator('table tbody tr td:nth-child(3)');
        this.searchedValue = null;
        this.descriptionTableData = page.locator('table tbody tr td:nth-child(1)')
        this.randomSelectedItem = null;
    }

    async searchPet(value){
        this.searchedValue = value;
        await this.searchField.fill(value);
        await this.searchButton.click();
    }

    async selectRandomProduct() {
        const locatorCount = await this.descriptionTableData.count();
        const randomIndex = Math.floor(Math.random() * locatorCount);
        this.randomSelectedItem = this.descriptionTableData.nth(randomIndex);
        await this.randomSelectedItem.click();
    }
}

export default SearchProduct;