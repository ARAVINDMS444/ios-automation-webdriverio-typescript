import { Actions } from "../utils/Actions.ts";
import { TestData } from "../utils/TestData.ts";
import { LoginPage } from "../pageobjects/LoginPage.ts";

describe("Swag Labs iOS App - Login Flow", (): void => {
  it("should login successfully with valid credentials", async (): Promise<void> => {
    await Actions.waitForElementToBeDisplayed(LoginPage.usernameField);
    await Actions.enterText(
      LoginPage.usernameField,
      TestData.TEST_DATA.username,
    );
    await Actions.enterText(
      LoginPage.passwordField,
      TestData.TEST_DATA.password,
    );
    await Actions.tapOnElement(LoginPage.loginButton);
    await Actions.waitForElementToBeDisplayed(LoginPage.productsTitleById);
    await Actions.isElementDisplayed(LoginPage.productsTitleById);
    await Actions.waitForElementToBeDisplayed(LoginPage.productsTitleByXPath);
    await Actions.assertElementIsVisible(LoginPage.productsTitleByXPath);
  });
});
