export const config: WebdriverIO.MultiremoteConfig = {
  runner: "local",

  specs: ["./src/tests/test.cross-platform-flow.ts"],
  maxInstances: 1,

  capabilities: {
    ios: {
      port: 4723,
      capabilities: {
        platformName: "iOS",
        "appium:automationName": "XCUITest",
        "appium:deviceName": "iPhone 16 Pro Max",
        "appium:platformVersion": "18.2",
        "appium:bundleId": "com.saucelabs.SwagLabsMobileApp",
        "appium:noReset": true,
        "appium:newCommandTimeout": 300,
      },
    },
    web: {
      capabilities: {
        browserName: "chrome",
      },
    },
  },

  logLevel: "info",
  bail: 0,
  waitforTimeout: 60000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,

  services: [
    [
      "appium",
      {
        args: {
          relaxedSecurity: true,
        },
      },
    ],
  ],

  framework: "mocha",

  mochaOpts: {
    ui: "bdd",
    timeout: 240000,
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
};
