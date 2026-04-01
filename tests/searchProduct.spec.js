import { test, expect } from '@playwright/test';
import SearchProduct from '../classes/SearchProduct';
import Homepage from '../classes/Homepage';

test.describe('Search Products', () => {
  let homepage;
  let product;

  test.beforeEach(async ({ page }) => { // Single browser tab
    homepage = new Homepage(page);
    product = new SearchProduct(page);

    // Passing the active browser tab into SearchProduct class so it can:
    // - locate elements;
    // - click buttons;
    // - type into inputs;
    // - assert UI behavior.
    // The is what we call the Page Object Model (POM). 
    // It is a design pattern in test automation where each page (or component) is represented by a class.
    // Playwright’s page object is used inside that class to define reusable actions (methods) and locators.

  });

  test('Successfuly search for a random product', async ({ page }) => {
    await homepage.navigateToHomepage();
    await product.searchPet('fish');
    await product.expectSearchContainResults();
    await product.randomSelectedItem();
  });
});