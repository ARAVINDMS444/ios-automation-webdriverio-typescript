import {expect} from "@wdio/globals";

describe("Swag Labs Mobile App - Login Test", () => {
    it("should login successfully with valid credentials", async () => {
        const usernameField = await $("~test-Username");
        const passwordField = await $("~test-Password");
        const loginButton = await $("~test-LOGIN");

        await usernameField.waitForDisplayed({timeout: 5000});
        await usernameField.setValue("standard_user");

        await passwordField.setValue("secret_sauce");
        await loginButton.click();

        const productsTitleById = await $("~test-PRODUCTS");
        await productsTitleById.waitForDisplayed({timeout: 5000});
        await expect(productsTitleById).toBeDisplayed();

        const productsTitleByXPath = await $(
            '//XCUIElementTypeStaticText[@name="PRODUCTS"]',
        );
        await productsTitleByXPath.waitForDisplayed({timeout: 5000});
        await expect(productsTitleByXPath).toBeDisplayed();
    });
});
