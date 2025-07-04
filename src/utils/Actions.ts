import {execSync} from "child_process";
import {driver} from "@wdio/globals";
import {ChainablePromiseElement} from "webdriverio";

export class Actions {
    /**
     * Waits for a specified number of seconds.
     * @param seconds - The number of seconds to wait.
     */
    static async waitForSeconds(seconds: number): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, seconds));
    }

    /**
     * Waits for an element to be displayed.
     * @param element - The element to wait for.
     * @param timeout - Optional timeout in milliseconds (default is 90000).
     */
    static async waitForElementToBeDisplayed(
        element: ChainablePromiseElement,
        timeout: number = 90000,
    ): Promise<void> {
        await element.waitForDisplayed({timeout});
    }

    /**
     * Waits for an element to be clickable.
     * @param element - The element to wait for.
     * @param timeout - Optional timeout in milliseconds (default is 5000).
     */
    static async waitForElementToBeClickable(
        element: ChainablePromiseElement,
        timeout: number = 5000,
    ): Promise<void> {
        await element.waitForClickable({timeout});
    }

    /**
     * Scrolls to an element.
     * @param element - The element to scroll to.
     */
    static async scrollToElement(
        element: ChainablePromiseElement,
    ): Promise<void> {
        await element.scrollIntoView();
    }

    /**
     * Taps on an element.
     * @param element - The element to tap on.
     */
    static async tapOnElement(element: ChainablePromiseElement): Promise<void> {
        await element.click();
    }

    /**
     * Enters text into a field.
     * @param element - The input field element.
     * @param text - The text to enter.
     */
    static async enterText(
        element: ChainablePromiseElement,
        text: string,
    ): Promise<void> {
        await element.setValue(text);
    }

    /**
     * Clears text from a field.
     * @param element - The input field element.
     */
    static async clearText(element: ChainablePromiseElement): Promise<void> {
        await element.clearValue();
    }

    /**
     * Gets the text of an element.
     * @param element - The element to get text from.
     * @returns The text of the element.
     */
    static async getTextOfElement(
        element: ChainablePromiseElement,
    ): Promise<string> {
        return await element.getText();
    }

    /**
     * Opens notifications.
     */
    static async openNotifications(): Promise<void> {
        await driver.openNotifications();
    }

    /**
     * Navigates back within the app.
     */
    static async navigateBack(): Promise<void> {
        await driver.back();
    }

    /**
     * Hides the keyboard.
     */
    static async hideKeyboard(): Promise<void> {
        await driver.hideKeyboard();
    }

    /**
     * Retrieves the value of the 'value' attribute from the specified element.
     * @param element - The element from which to get the 'value' attribute.
     * @returns A promise that resolves to the value of the 'value' attribute.
     */
    static async getValueAttribute(
        element: ChainablePromiseElement,
    ): Promise<string> {
        return (await element.getAttribute("value")) as string;
    }

    /**
     * Retrieves the value of the 'name' attribute from the specified element.
     * @param element - The element from which to get the 'value' attribute.
     * @returns A promise that resolves to the value of the 'value' attribute.
     */
    static async getNameAttribute(
        element: ChainablePromiseElement,
    ): Promise<string> {
        return (await element.getAttribute("name")) as string;
    }

    /**
     * Dismisses the currently open alert.
     */
    static async dismissAlert(): Promise<void> {
        await driver.dismissAlert();
    }

    /**
     * Accepts the currently open alert.
     */
    static async acceptAlert(): Promise<void> {
        await driver.acceptAlert();
    }

    /**
     * Scrolls to the end of a scrollable view on iOS.
     * This method uses 'mobile: scroll' to scroll until the end of the view is reached.
     */
    static async scrollToEnd(): Promise<void> {
        await driver.execute("mobile: scroll", {direction: "down"});
    }

    /**
     * Scrolls to the top of a scrollable view on iOS.
     * This method uses 'mobile: scroll' to scroll until the top of the view is reached.
     */
    static async scrollToTop(): Promise<void> {
        await driver.execute("mobile: scroll", {direction: "up"});
    }

    /**
     * Press Done button from Keyboard
     */
    static async pressDoneOnKeyboard() {
        await driver.execute("mobile: performEditorAction", {action: "done"});
    }

    /**
     * Press Next button from Keyboard
     */
    static async pressNextOnKeyboard() {
        await driver.execute("mobile: performEditorAction", {action: "next"});
    }

    /**
     * Scrolls the scrollable view until the specified text is visible on iOS.
     * This method uses 'mobile: scroll' to scroll until the specified visible text is found using an XPath locator.
     * @param text - The visible text to scroll into view.
     */
    static async scrollIntoView(text: string): Promise<void> {
        await driver.execute("mobile: scroll", {
            direction: "down",
            strategy: "xpath",
            selector: `//*[contains(., '${text}')]`, // Scrolls to the element that contains the visible text.
        });
    }

    /**
     * Asserts that a specific element is visible on the page with a customizable timeout.
     * @param element - The WebdriverIO Element for the element to be checked.
     * @param timeout - Timeout in milliseconds (default: 50000 ms).
     */
    static async assertElementIsVisible(
        element: ChainablePromiseElement,
        timeout: number = 50000,
    ): Promise<void> {
        await element.waitForDisplayed({timeout});
        const isDisplayed = await element.isDisplayed();
        expect(isDisplayed).toBeTruthy();
    }

    /**
     * Verifies if the provided text contains the expected text.
     * @param actualText - The full text to search within.
     * @param expectedText - The text to look for.
     * @returns True if the actual text contains the expected text, otherwise false.
     */
    static assertContains(actualText: string, expectedText: string): boolean {
        return actualText.includes(expectedText);
    }

    /**
     * Asserts if the actual text exactly matches the expected text.
     * @param actualText - The full text to compare.
     * @param expectedText - The expected text to compare against.
     */
    static assertTextStrictEqual(actualText: string, expectedText: string): void {
        expect(actualText).toStrictEqual(expectedText);
    }

    /**
     * Checks if an element is displayed and asserts that it is truthy.
     * @param element - The element to check.
     */
    static async isElementDisplayed(
        element: ChainablePromiseElement,
    ): Promise<void> {
        const isDisplayed = await element.isDisplayed();
        expect(isDisplayed).toBeTruthy();
    }

    /**
     * Asserts that a specific element is hidden on the page with a customizable timeout.
     * @param element - The WebdriverIO Element for the element to be checked.
     * @param timeout - Timeout in milliseconds (default: 50000 ms).
     */
    static async assertElementIsHidden(
        element: WebdriverIO.Element,
        timeout: number = 50000,
    ): Promise<void> {
        await element.waitForDisplayed({timeout, reverse: true});
        const isDisplayed = await element.isDisplayed();
        expect(isDisplayed).toBeFalsy();
    }

    /**
     * Retrieves the UDID of the first connected iOS device.
     * @returns The UDID of the connected iOS device.
     */
    static getUdid(): string {
        try {
            const devices = execSync("idevice_id -l").toString().trim().split("\n");
            if (devices.length > 0) {
                return devices[0];
            } else {
                throw new Error(
                    "No iOS devices connected. Please connect a device and try again.",
                );
            }
        } catch (error: any) {
            process.exit(1);
        }
    }

    /**
     * Performs a swipe on a specified element in the given direction using W3C actions.
     * @param element The WebdriverIO element to perform the swipe on.
     * @param direction The direction of the swipe ('left', 'right', 'up', 'down').
     * @param offset The offset in pixels for the swipe. Default is 20% of the element's size.
     */
    static async swipeOnElement(
        element: ChainablePromiseElement,
        direction: "left" | "right" | "up" | "down",
        offset: number | null = null,
    ): Promise<void> {
        const resolvedElement = element;

        if (!resolvedElement.elementId) {
            throw new Error(
                "Element ID is undefined. Ensure the element is present before performing a swipe.",
            );
        }

        const rect = await driver.getElementRect(await resolvedElement.elementId);

        const horizontalOffset = offset ?? rect.width * 0.2;
        const verticalOffset = offset ?? rect.height * 0.2;

        let startX = rect.x + rect.width / 2;
        let startY = rect.y + rect.height / 2;
        let endX = startX;
        let endY = startY;

        switch (direction) {
            case "left":
                startX = rect.x + rect.width - horizontalOffset;
                endX = rect.x + horizontalOffset;
                break;
            case "right":
                startX = rect.x + horizontalOffset;
                endX = rect.x + rect.width - horizontalOffset;
                break;
            case "up":
                startY = rect.y + rect.height - verticalOffset;
                endY = rect.y + verticalOffset;
                break;
            case "down":
                startY = rect.y + verticalOffset;
                endY = rect.y + rect.height - verticalOffset;
                break;
            default:
                throw new Error(
                    "Invalid direction. Use 'left', 'right', 'up', or 'down'.",
                );
        }

        await driver.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: {pointerType: "touch"},
                actions: [
                    {type: "pointerMove", duration: 0, x: startX, y: startY},
                    {type: "pointerDown"},
                    {type: "pause", duration: 500},
                    {type: "pointerMove", duration: 500, x: endX, y: endY},
                    {type: "pointerUp"},
                ],
            },
        ]);

        // Release actions after performing them
        await driver.releaseActions();
    }

    /**
     * Performs a drag-and-drop operation between two elements using touch actions.
     *
     * @param sourceElement The source WebdriverIO element to drag.
     * @param targetElement The target WebdriverIO element where the source element will be dropped.
     */
    static async dragAndDrop(
        sourceElement: ChainablePromiseElement,
        targetElement: ChainablePromiseElement,
    ): Promise<void> {
        // Get the source element's coordinates and size
        const sourceLocation = await sourceElement.getLocation();
        const sourceSize = await sourceElement.getSize();
        const startX = Math.floor(sourceLocation.x + sourceSize.width / 2);
        const startY = Math.floor(sourceLocation.y + sourceSize.height / 2);

        // Get the target element's coordinates and size
        const targetLocation = await targetElement.getLocation();
        const targetSize = await targetElement.getSize();
        const endX = Math.floor(targetLocation.x + targetSize.width / 2);
        const endY = Math.floor(targetLocation.y + targetSize.height / 2);

        // Perform drag-and-drop using touch actions
        await driver.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: {pointerType: "touch"},
                actions: [
                    {type: "pointerMove", duration: 0, x: startX, y: startY},
                    {type: "pointerDown", button: 0},
                    {type: "pause", duration: 500}, // Optional pause for realism
                    {type: "pointerMove", duration: 1000, x: endX, y: endY},
                    {type: "pointerUp", button: 0},
                ],
            },
        ]);

        // Release the touch actions
        await driver.releaseActions();
    }

    /**
     * Scrolls down by a specified number of pixels.
     * @param pixels - The number of pixels to scroll down.
     */
    static async scrollDownByPixels(pixels: number): Promise<void> {
        const screenSize = await driver.getWindowRect();
        const startX = screenSize.width / 2;
        const startY = screenSize.height / 2;
        const endY = startY - pixels;

        await driver.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: {pointerType: "touch"},
                actions: [
                    {type: "pointerMove", duration: 0, x: startX, y: startY},
                    {type: "pointerDown"},
                    {type: "pointerMove", duration: 1000, x: startX, y: endY},
                    {type: "pointerUp"},
                ],
            },
        ]);
    }

    /**
     * Scrolls horizontally by a specified number of pixels.
     * @param pixels - The number of pixels to scroll horizontally. Positive values scroll right, negative values scroll left.
     */
    static async scrollHorizontallyByPixels(pixels: number): Promise<void> {
        const screenSize = await driver.getWindowRect();
        const startX = screenSize.width / 2;
        const startY = screenSize.height / 2;
        const endX = startX + pixels; // Scroll horizontally by the specified pixels

        await driver.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: {pointerType: "touch"},
                actions: [
                    {type: "pointerMove", duration: 0, x: startX, y: startY},
                    {type: "pointerDown"},
                    {type: "pointerMove", duration: 1000, x: endX, y: startY},
                    {type: "pointerUp"},
                ],
            },
        ]);
    }

    /**
     * Scrolls the scrollable view horizontally one step forward on iOS.
     * Uses "mobile: swipe" for a left-to-right swipe gesture.
     */
    static async scrollHorizontalForward(): Promise<void> {
        await driver.execute("mobile: swipe", {
            direction: "left", // Swipes left to simulate scrolling forward horizontally
        });
    }

    /**
     * Scrolls the scrollable view horizontally one step backward on iOS.
     * Uses "mobile: swipe" for a right-to-left swipe gesture.
     */
    static async scrollHorizontalBackward(): Promise<void> {
        await driver.execute("mobile: swipe", {
            direction: "right", // Swipes right to simulate scrolling backward horizontally
        });
    }

    /**
     * Scrolls in a specified direction until the given element is visible or until the maximum number of scrolls is reached.
     * @param {string} elementSelector - The selector of the element to be found.
     * @param {"up" | "down" | "left" | "right"} direction - The direction to scroll in.
     * @param {number} [maxScrolls=50] - The maximum number of scroll attempts before failing.
     * @throws {Error} If the element is not found after the maximum number of scrolls.
     */
    static async scrollUntilVisible(
        elementSelector: string,
        direction: "up" | "down" | "left" | "right",
        maxScrolls: number = 50,
    ): Promise<void> {
        let scrolls = 0;

        while (scrolls < maxScrolls) {
            // Check if the element is visible
            const element = $(elementSelector);
            const isVisible = await element.isDisplayed().catch(() => false);

            if (isVisible) {
                return; // Stop scrolling once the element is visible
            }

            // Perform scrolling based on the direction
            switch (direction) {
                case "up":
                    await driver.execute("mobile: swipe", {direction: "up"});
                    break;
                case "down":
                    await driver.execute("mobile: swipe", {direction: "down"});
                    break;
                case "left":
                    await driver.execute("mobile: swipe", {direction: "left"});
                    break;
                case "right":
                    await driver.execute("mobile: swipe", {direction: "right"});
                    break;
                default:
                    throw new Error(`Invalid direction: ${direction}`);
            }

            scrolls++;
        }

        // If the loop completes without finding the element
        throw new Error(
            `Element ${elementSelector} not found after ${maxScrolls} scrolls`,
        );
    }

    /**
     * Performs multiple taps on the specified element.
     *
     * @param element - The WebdriverIO element to tap on.
     * @param times - The number of times to tap the element (default is 1).
     */
    static async tapMultipleTimesOnElement(
        element: ChainablePromiseElement,
        times: number = 1,
    ): Promise<void> {
        for (let i: number = 0; i < times; i++) {
            await element.click();
        }
    }

    /**
     * Verifies if the provided text contains the expected text.
     * @param actualText - The full text to search within.
     * @param expectedText - The text to look for.
     * @returns True if the actual text contains the expected text, otherwise false.
     */
    static isTextDisplayed(actualText: string, expectedText: string): boolean {
        return actualText.includes(expectedText);
    }

    /**
     * Handles an iOS alert if present.
     * Accepts the alert if found, otherwise proceeds to the next steps.
     */
    static async handleIOSAlert() {
        if (await driver.getAlertText().catch((): null => null)) {
            await driver.acceptAlert();
        }
    }

    /**
     * Taps on the first visible element between two provided WebdriverIO element locators.
     * If both elements are invisible, logs a message indicating that.
     * @param element1 - The first element to check for visibility and tap if visible.
     * @param element2 - The second element to check if the first one is not visible.
     */
    static async tapIfAnyVisible(
        element1: ChainablePromiseElement,
        element2: ChainablePromiseElement,
    ): Promise<void> {
        const isElement1Visible: boolean = await element1.isDisplayed();
        const isElement2Visible: boolean = await element2.isDisplayed();

        isElement1Visible
            ? await element1.click()
            : isElement2Visible
                ? await element2.click()
                : console.log("Neither element is visible.");
    }
}
