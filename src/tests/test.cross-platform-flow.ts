import { expect } from "@wdio/globals";
import { Actions } from "../utils/Actions";
import { TestData } from "../utils/TestData";

describe("Swag Labs - Cross Platform Flow (iOS + Web)", () => {
  it("should login+logout on iOS, then login+logout on Web", async () => {
    const multi = browser as unknown as WebdriverIO.MultiRemoteBrowser;

    const ios = multi.getInstance("ios");
    const web = multi.getInstance("web");

    // iOS Flow
    const usernameInputMobile = ios.$("~test-Username");
    const passwordInputMobile = ios.$("~test-Password");
    const loginBtnMobile = ios.$("~test-LOGIN");

    await usernameInputMobile.setValue("standard_user");
    await passwordInputMobile.setValue("secret_sauce");
    await loginBtnMobile.click();

    const productListMobile = ios.$("~test-PRODUCTS");
    await expect(productListMobile).toBeDisplayed();

    const menuButtonMobile = ios.$("~test-Menu");
    const logoutButtonMobile = ios.$("~test-LOGOUT");

    await menuButtonMobile.click();
    await Actions.waitForSeconds(3000);
    await logoutButtonMobile.click();
    await Actions.waitForSeconds(3000);
    await expect(loginBtnMobile).toBeDisplayed();

    await ios.execute("mobile: terminateApp", {
      bundleId: TestData.TEST_DATA.SWAG_LABS_DEMO_APP_BUNDLE_ID,
    });

    // Web Flow
    await web.url("https://www.saucedemo.com/v1/index.html");

    const usernameInputWeb = web.$("#user-name");
    const passwordInputWeb = web.$("#password");
    const loginBtnWeb = web.$("#login-button");

    await usernameInputWeb.setValue("standard_user");
    await passwordInputWeb.setValue("secret_sauce");
    await loginBtnWeb.click();

    await Actions.waitForSeconds(3000);

    const menuBtnWeb = web.$("//button[normalize-space()='Open Menu']");
    await menuBtnWeb.click();

    const logoutBtnWeb = web.$("(//a[normalize-space()='Logout'])[1]");
    await logoutBtnWeb.click();

    await expect(usernameInputWeb).toBeDisplayed();
  });
});

describe("Swag Labs - Cross Platform Flow (Web + iOS)", () => {
  it("should login+logout on Web, then login+logout on iOS", async () => {
    const multi = browser as unknown as WebdriverIO.MultiRemoteBrowser;

    const ios = multi.getInstance("ios");
    const web = multi.getInstance("web");

    // Web Flow
    await web.url("https://www.saucedemo.com/v1/index.html");

    const usernameInputWeb = web.$("#user-name");
    const passwordInputWeb = web.$("#password");
    const loginBtnWeb = web.$("#login-button");

    await usernameInputWeb.setValue("standard_user");
    await passwordInputWeb.setValue("secret_sauce");
    await loginBtnWeb.click();

    await Actions.waitForSeconds(3000);

    const menuBtnWeb = web.$("//button[normalize-space()='Open Menu']");
    await menuBtnWeb.click();

    const logoutBtnWeb = web.$("(//a[normalize-space()='Logout'])[1]");
    await logoutBtnWeb.click();

    await expect(usernameInputWeb).toBeDisplayed();

    // iOS Flow
    await ios.execute("mobile: launchApp", {
      bundleId: TestData.TEST_DATA.SWAG_LABS_DEMO_APP_BUNDLE_ID,
    });

    const usernameInputMobile = ios.$("~test-Username");
    const passwordInputMobile = ios.$("~test-Password");
    const loginBtnMobile = ios.$("~test-LOGIN");

    await usernameInputMobile.setValue("standard_user");
    await passwordInputMobile.setValue("secret_sauce");
    await loginBtnMobile.click();

    const productListMobile = ios.$("~test-PRODUCTS");
    await expect(productListMobile).toBeDisplayed();

    const menuButtonMobile = ios.$("~test-Menu");
    const logoutButtonMobile = ios.$("~test-LOGOUT");

    await menuButtonMobile.click();
    await Actions.waitForSeconds(3000);
    await logoutButtonMobile.click();
    await Actions.waitForSeconds(3000);
    await expect(loginBtnMobile).toBeDisplayed();

    await ios.execute("mobile: terminateApp", {
      bundleId: TestData.TEST_DATA.SWAG_LABS_DEMO_APP_BUNDLE_ID,
    });
  });
});
