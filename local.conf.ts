import { Helpers } from "./src/utils/Helpers.ts";
import { TestData } from "./src/utils/TestData.ts";

export const config: WebdriverIO.Config = {
  runner: "local",
  port: 4723,
  specs: ["./src/tests/**/*.ts"],
  maxInstances: 1,

  capabilities: [
    {
      platformName: "iOS",
      "appium:automationName": "XCUITest",
      "appium:deviceName": "iPhone 16 Pro Max",
      "appium:platformVersion": "18.2",
      "appium:bundleId": "com.saucelabs.SwagLabsMobileApp",
      "appium:noReset": true,
      "appium:newCommandTimeout": 300,
    },
  ],

  logLevel: "info",
  bail: 0,
  waitforTimeout: 60000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,

  services: [["appium", { args: { relaxedSecurity: true } }]],

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 2400000,
  },

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  specFileRetries: 2,
  specFileRetriesDeferred: false,

  after: async (): Promise<void> => {
    await Helpers.closeApp(TestData.TEST_DATA.SWAG_LABS_DEMO_APP_BUNDLE_ID);
  },
};
