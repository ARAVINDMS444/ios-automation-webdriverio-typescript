import { $, expect } from "@wdio/globals";

describe("Swag Labs iOS - Sorting Flow", () => {
  it("should login and view details of a product", async () => {
    const usernameInput: ChainablePromiseElement = $("~test-Username");
    const passwordInput: ChainablePromiseElement = $("~test-Password");
    const loginBtn: ChainablePromiseElement = $("~test-LOGIN");

    await expect(usernameInput).toBeDisplayed();
    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");
    await loginBtn.click();

    const productList: ChainablePromiseElement = $("~test-PRODUCTS");
    await expect(productList).toBeDisplayed();

    const sortButton: ChainablePromiseElement = $(
      "~test-Modal Selector Button",
    );
    await sortButton.click();

    const sortOption: ChainablePromiseElement = $("~Price (low to high)");
    await sortOption.click();

    const productTitle: ChainablePromiseElement = $(
      '//XCUIElementTypeStaticText[@name="test-Item title" and @label="Sauce Labs Onesie"]',
    );
    const productPrice: ChainablePromiseElement = $(
      '//XCUIElementTypeStaticText[@name="test-Price" and @label="$7.99"]',
    );
    const addToCartBtn: ChainablePromiseElement = $(
      '(//XCUIElementTypeOther[@name="test-ADD TO CART"])[1]',
    );

    await expect(productTitle).toBeDisplayed();
    await expect(productPrice).toBeDisplayed();
    await expect(addToCartBtn).toBeDisplayed();
  });
});
