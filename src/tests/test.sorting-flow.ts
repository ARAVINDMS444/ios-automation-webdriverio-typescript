import { $, $$, expect } from "@wdio/globals";
import { ChainablePromiseElement, ChainablePromiseArray } from "webdriverio";
import { Actions } from "../utils/Actions";
import { Helpers } from "../utils/Helpers";

describe("Swag Labs Android App - Sorting Flow", (): void => {
  it("should login and sort the products and validate", async (): Promise<void> => {
    const usernameInput: ChainablePromiseElement = $("~test-Username");
    const passwordInput: ChainablePromiseElement = $("~test-Password");
    const loginBtn: ChainablePromiseElement = $("~test-LOGIN");

    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");
    await loginBtn.click();

    const productList: ChainablePromiseElement = $("~test-PRODUCTS");
    await expect(productList).toBeDisplayed();

    const sortButton: ChainablePromiseElement = $(
      '//XCUIElementTypeOther[@name="test-Modal Selector Button"]/XCUIElementTypeOther/XCUIElementTypeOther',
    );
    await sortButton.click();

    const sortOption: ChainablePromiseElement = $("~Price (low to high)");
    await sortOption.click();

    let scrolls: number = 0;
    const sortedPrices = new Set<number>();

    while (scrolls < 5) {
      const products: ChainablePromiseArray = $$(
        '//XCUIElementTypeStaticText[contains(@label, "$")]',
      );
      const count: number = await products.length;

      for (let i: number = 0; i < count; i++) {
        const productPrice: string = await products[i].getText();
        const price: number = parseFloat(productPrice.replace("$", ""));
        sortedPrices.add(price);
      }
      await Actions.scrollDownByPixels(200);
      scrolls++;
    }

    expect(Helpers.isAscending(sortedPrices)).toBeTruthy();
  });
});
