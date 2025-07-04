export const config: WebdriverIO.Config = {
  user: process.env.BROWSERSTACK_USERNAME || "aravindms_MWY8zZ",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "21yNs6bLpojGzojxPDc2",

  hostname: "hub.browserstack.com",
  maxInstances: 10,

  services: [
    [
      "browserstack",
      {
        browserstackLocal: true,
        app: "bs://c45607616e7230ab80614fd4ff7936fc37f12962",
        accessibility: false,
        testObservabilityOptions: {
          buildName: "swag-labs-demo-iOS",
          projectName: "iOS Browserstack Test",
        },
      },
    ],
  ],

  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone 15 Pro Max",
      "appium:platformVersion": "17",
      "appium:automationName": "XCUITest",
      "bstack:options": {
        debug: true,
        networkLogs: true,
      },
    },
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone 14 Pro Max",
      "appium:platformVersion": "16",
      "appium:automationName": "XCUITest",
      "bstack:options": {
        debug: true,
        networkLogs: true,
      },
    },
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone 13 Pro Max",
      "appium:platformVersion": "18",
      "appium:automationName": "XCUITest",
      "bstack:options": {
        debug: true,
        networkLogs: true,
      },
    },
  ],

  specs: ["./src/tests/**/*.ts"],

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
};
