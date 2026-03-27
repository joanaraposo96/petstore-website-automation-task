import { test, expect } from '@playwright/test';
import SearchProduct from '../classes/SearchProduct';

test('Pet Store', async ({ page }) => {
  const product = new SearchProduct(page);

  await page.goto("https://petstore.octoperf.com/actions/Catalog.action");

  await expect(page).toHaveTitle("JPetStore Demo");

  await product.searchPet('e');

  const texts = await product.nameTableData.allTextContents(); //returns a list
  texts.forEach(text => expect(text).toContain(product.searchedValue));

  await product.randomSelectedItem;
});