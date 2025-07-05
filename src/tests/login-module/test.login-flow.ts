import { expect } from "@wdio/globals";

describe("Swag Labs iOS App - Login Flow", () => {
  it("should login successfully with valid credentials", async () => {
    const usernameField: ChainablePromiseElement = $("~test-Username");
    const passwordField: ChainablePromiseElement = $("~test-Password");
    const loginButton: ChainablePromiseElement = $("~test-LOGIN");

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue("standard_user");

    await passwordField.setValue("secret_sauce");
    await loginButton.click();

    const productsTitleById: ChainablePromiseElement = $("~test-PRODUCTS");
    await productsTitleById.waitForDisplayed({ timeout: 5000 });
    await expect(productsTitleById).toBeDisplayed();

    const productsTitleByXPath: ChainablePromiseElement = $(
      '//XCUIElementTypeStaticText[@name="PRODUCTS"]',
    );
    await productsTitleByXPath.waitForDisplayed({ timeout: 5000 });
    await expect(productsTitleByXPath).toBeDisplayed();
  });
});
