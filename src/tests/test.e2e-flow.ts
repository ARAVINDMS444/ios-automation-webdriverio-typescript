// Test Scenario
// 1. Login to Swag labs app.
// 2. Select the cheapest product.
// 3. Add the cheapest product to the cart.
// 4. Fill payment details
// 5. Complete the order
// 6. Verify success message

import { $, expect } from "@wdio/globals";
import { Actions } from "../utils/Actions.ts";

describe("Swag Labs iOS App - E2E Flow", (): void => {
  it("should login and sort the prices of the products", async (): Promise<void> => {
    const usernameInput: ChainablePromiseElement = $("~test-Username");
    const passwordInput: ChainablePromiseElement = $("~test-Password");
    const loginBtn: ChainablePromiseElement = $("~test-LOGIN");

    await usernameInput.setValue("standard_user");
    await passwordInput.setValue("secret_sauce");
    await loginBtn.click();

    const productList: ChainablePromiseArray = $$(
      '//XCUIElementTypeStaticText[contains(@label, "$")]',
    );
    const count: number = await productList.length;
    const products: any[] = [];

    for (let i: number = 1; i < count; i++) {
      const priceText: string = await productList[i].getText();
      const numericPrice: number = Number(priceText.replace("$", ""));
      products.push({ price: numericPrice, index: i });
    }

    products.sort((a, b): number => a.price - b.price);

    // Get the index of the cheapest product
    const index: number = products[0].index + 1;
    const actualPrice: number = products[0].price;

    // Add cheapest product to cart
    const addToCartButton: ChainablePromiseElement = $(
      `(//XCUIElementTypeOther[@name="test-ADD TO CART"])[${index}]`,
    );
    await addToCartButton.click();
    await Actions.waitForSeconds(2000);

    // Checkout item
    const cartButton: ChainablePromiseElement = $("~test-Cart");
    await cartButton.click();
    await Actions.waitForSeconds(3000);

    // Fetch the item price in the cart
    const cartItemPrice: string = await $(
      '//XCUIElementTypeStaticText[contains(@label, "$")]',
    ).getText();
    const expectedPrice: number = Number(cartItemPrice.replace("$", ""));

    // Assert the cheapest item is added to the cart
    expect(expectedPrice).toBe(actualPrice);
  });
});
