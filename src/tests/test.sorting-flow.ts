import { $, expect } from "@wdio/globals";
import { Actions } from "../utils/Actions.ts";
import { HomePage } from "../pageobjects/HomePage.ts";

describe("Swag Labs iOS App - Sorting Flow", (): void => {
  it("should login and sort the prices of the products", async (): Promise<void> => {
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
    await Actions.waitForSeconds(2000);

    const sortedPrices: number[] = [];

    for (let i: number = 1; i <= 6; i++) {
      const priceText: string = await HomePage.productsPrices(i).getText();
      const numericPrice: number = Number(priceText.replace("$", ""));
      sortedPrices.push(numericPrice);
    }

    function isAscending(arr: number[]): boolean {
      for (let i: number = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          return false;
        }
      }
      return true;
    }

    expect(isAscending(sortedPrices)).toBeTruthy();
  });
});
