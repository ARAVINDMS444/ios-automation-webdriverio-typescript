# iOS Automation WebdriverIO Framework

## Overview

This iOS App Automation Framework is built using [WebdriverIO](https://webdriver.io/), designed to automate iOS
application testing. It supports TypeScript and includes various utilities and configurations to ensure robust and
maintainable test automation.

## Features

- **WebdriverIO v9.x** – Leverage the latest features of WebdriverIO.
- **TypeScript Support** – Write test scripts in TypeScript for better type safety and code management.
- **Page Object Model (POM)** – Organize locators and page interactions in separate classes.
- **Cross-Platform Execution** – Run tests on different iOS devices.
- **Allure Reporting** – Generate detailed test reports with screenshots, logs, and test steps.
- **Reusable Utilities** – Common helper functions to streamline test development.
- **JetBrains Webstorm IDE** – Used for efficient test development and execution.

## Prerequisites

Ensure you have the following installed before setting up the framework:

- **Node.js** (v16.x or later)
- **Java Development Kit (JDK)** (v8 or later)
- **Xcode** (Latest version)
- **Appium** (Installed globally)
- **WebdriverIO CLI**
- **JetBrains Webstorm IDE**
- **iOS Real Device** (for test execution)
- **iOS Simulators** (for test execution)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AgentdesksEngine/ios-officeapp-automation.git
cd ios-officeapp-automation
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Xcode and iOS Simulator

Ensure Xcode is properly configured:

```bash
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

### 4. Install Appium Globally

```bash
npm install -g appium
```

### 5. Verify Installations

Check if all dependencies are installed correctly:

```bash
node -v
xcodebuild -version
appium -v
wdio --version
```

## Code Formatting with Prettier

Ensure your code remains clean and consistent using Prettier.

### 1. Install Prettier

```bash
npm install --save-dev prettier
```

### 2. Format Codebase

```bash
npx prettier --write .
```

### 3. IDE Integration

Install the Prettier plugin for your IDE (e.g., JetBrains Aqua, VS Code) and enable `Format On Save`.

## Project Structure

The framework follows a modular structure for maintainability and scalability:

```
├── src/tests/       # Test cases
│   ├── test.testcase1.ts
│   ├── test.testcase2.ts
│   └── ...
├── src/page-objects/      # Page Object Model (POM)
│   ├── LoginPage.ts
│   ├── SignupPage.ts
│   └── ...
├── src/utils/             # Utility functions and constants
│   ├── Helpers.ts
│   ├── constants.ts
│   └── ...
├── tsconfig.json          # TypeScript Configuration
├── package.json           # NPM Configuration
├── wdio.conf.ts           # WebdriverIO Configuration
└── README.md              # Documentation
```

## Running Tests

To run all smoke tests in the Office App production environment:

1. Open `package.json`.
2. Click the **Run** button next to the `smoke-tests` script.

Alternatively, run tests via the command line:

```bash
npm run tests
```

## Contributing

We welcome contributions! Follow these steps:

### 1. Fork the Repository

Click the "Fork" button on the repository page.

### 2. Clone Your Fork

```bash
git clone https://github.com/ARAVINDMS444/ios-automation-webdriverio-typescript.git
cd ios-automation-webdriverio-typescript
```

### 3. Create a New Branch

```bash
git checkout -b feature/your-name/your-feature-name
```

### 4. Implement Your Changes

Automate your test case and run it locally to ensure correctness.

### 5. Commit Your Changes

```bash
git commit -m "Add feature: your feature description"
```

### 6. Push to Your Fork

```bash
git push origin feature/your-name/your-feature-name
```

### 7. Create a Pull Request

Go to the original repository and submit a pull request.

### Contribution Guidelines

- **Code Style** – Follow existing formatting conventions. Use Prettier for consistency.
- **Testing** – Ensure all tests pass before submitting a pull request.

---

_Happy Testing! 🚀_
