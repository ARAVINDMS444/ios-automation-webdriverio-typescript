import {$, expect} from "@wdio/globals";

describe("Swag Labs iOS App - Purchase Flow", () => {
    it("should login and add an item to cart", async () => {
        // Wait for login screen
        const usernameField: ChainablePromiseElement = $("~test-Username");
        const passwordField: ChainablePromiseElement = $("~test-Password");
        const loginButton: ChainablePromiseElement = $("~test-LOGIN");

        await expect(usernameField).toBeDisplayed();
        await usernameField.setValue("standard_user");
        await passwordField.setValue("secret_sauce");
        await loginButton.click();

        // Wait for inventory screen
        const firstProduct: ChainablePromiseElement = $(
            '(//XCUIElementTypeOther[@name="test-Item"])[1]',
        );
        await expect(firstProduct).toBeDisplayed();

        // Add first product to cart
        const addToCartButton: ChainablePromiseElement = $(
            '(//XCUIElementTypeOther[@name="test-ADD TO CART"])[1]',
        );
        await addToCartButton.click();

        // Go to cart
        const cartButton: ChainablePromiseElement = $("~test-Cart");
        await cartButton.click();

        // Verify item in cart
        const cartItem: ChainablePromiseElement = $("~Sauce Labs Backpack");
        await expect(cartItem).toBeDisplayed();

        // Checkout item
        const removeButton: ChainablePromiseElement = $("~test-REMOVE");
        await removeButton.click();

        // Checkout item
        const continueShoppingButton: ChainablePromiseElement = $(
            "~test-CONTINUE SHOPPING",
        );
        await continueShoppingButton.click();

        // Verify Products Text is visible
        const productsTitle: ChainablePromiseElement = $(
            '//XCUIElementTypeStaticText[@name="PRODUCTS"]',
        );
        await expect(productsTitle).toBeDisplayed();
    });
});
