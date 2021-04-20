WEBDRIVER-IO-MOBILE-APP-AUTOMATION-TS
Features
WDIO
Mocha
TypeScript
Typed Config
ESLint
VSCode Integration
Page Object Model
Requirements
Node version v12
(for local execution) Android Studio
Emulator should be created and should match the configuration specified in the config files.
(for cloud execution) Sauce Labs Account
(for ios execution) Update the pageobjects and utilities to match the object description in IoS package.
Quick Start
clone the git repo: git clone
install the dependencies: npm install
(for cloud execution) set the following environment variables with your sauce labs credentials
SAUCE_USERNAME
SAUCE_ACCESS_KEY
Run the Tests
You can either run the tests with the integrated Visual Studio Code Debug Scripts, or you can run them with one of the following terminal commands.

Local Android Test Execution
npm run test:android


Local Android Smoke Test Execution
npm run test:android-smoke

Cloud Execution with Sauce Labs against Android Device
npm run test:saucelabs-android

Cloud Execution with Sauce Labs against Android Device - Smoke Test
npm run test:saucelabs-android-smoke

Cloud Execution with Sauce Labs against IoS Device [Once the pageobjects and utilities are updated]
npm run test:saucelabs-ios

Cloud Execution with Sauce Labs against IoS Device - Smoke Test [Once the pageobjects and utilities are updated]
npm run test:saucelabs-ios-smoke

Cloud Execution with Sauce Labs against both devices [Once the pageobjects and utilities are updated for IoS]
npm run test:saucelabs

Cloud Execution with Sauce Labs against both devices - Smoke Test [Once the pageobjects and utilities are updated for IoS]
npm run test:saucelabs-smoke

Static Analysis of Code
Static Analysis helps in assessing the code quality against standards and best practices. You can execute the lint scripts via the following terminal commands.

Code Linting
npm run code:lint

Fix the identified linting errors and warnings
npm run code:lint-fix

Known Limitations and Issues
VSCode
If you want to debug your tests with breakpoints in VSCode, you have to install the nightly version of the JavaScript Debugger
