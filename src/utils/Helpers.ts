import {driver} from "@wdio/globals";
import {Actions} from "./Actions";
import {LogoutPage} from "../pageobjects/LogoutPage";

export class Helpers {
    /**
     * Launches the app with the specified bundle identifier.
     * @param bundleId - The bundle identifier of the app to launch (iOS).
     */
    static async launchApp(bundleId: string): Promise<void> {
        await driver.activateApp(bundleId);
    }

    /**
     * Closes the app with the specified bundle identifier.
     * @param bundleId - The bundle identifier of the app to close (iOS).
     */
    static async closeApp(bundleId: string): Promise<void> {
        await driver.terminateApp(bundleId);
    }

    /**
     * Logout from the application by navigating back and selecting the sign-out option on the sign-up page.
     */
    static async logOutFromApplication(): Promise<void> {
        await Actions.tapOnElement(LogoutPage.menuButton());
        await Actions.waitForElementToBeDisplayed(LogoutPage.logoutButton());
        await Actions.tapOnElement(LogoutPage.logoutButton());
        await Actions.waitForElementToBeDisplayed(LogoutPage.loginButton());
        await Actions.isElementDisplayed(LogoutPage.loginButton());
    }
}
