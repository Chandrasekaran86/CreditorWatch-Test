# 1. **CREDITWATCH PORTAL TEST AUTOMATION**

This readme.md file provides a brief overview to quick start the test execution. 
For a detailed overview, refer to the "Automation User Guide".

- [1. **CREDITWATCH PORTAL TEST AUTOMATION**](#1-creditwatch-portal-test-automation)
  - [1.1. **Pre-Requisites**](#11-pre-requisites)
  - [1.2. **Quick Start**](#12-quick-start)
  - [1.3. **Update Browser Drivers**](#13-update-browser-drivers)
  - [1.4. **Run the Tests**](#14-run-the-tests)
  - [1.5. **Generate Allure Report**](#15-generate-allure-report)
  - [1.6. **Static Analysis of Code**](#16-static-analysis-of-code)
  - [1.7. **Next Steps**](#17-next-steps)

## 1.1. **Pre-Requisites**
The following softwares needs to be installed in the system and its location needs to be updated in System Properties before proceeding with the execution
* NodeJS (v12.0)
* NPM
* WebDriverIO
* Mocha
* Chai
* ESLint
* Python
* Java (v8.0 or above)
* Allure Reporter
* ESLint
  
## 1.2. **Quick Start**

1. Clone the git repo
```
$ git clone

```
2. Install the dependencies. 
   **Note:** If 'package-lock.json' file is available in the project folder, delete this file.   

```
$ npm install

```
## 1.3. **Update Browser Drivers**
The test development activity was completed using the following browsers:
    a. Chrome(version -  79.0.3945.79)
    b. Firfox(version - 79.0)
In case if a different version of these browsers are used, 
    1. The following commands should be executed in the project folder. To use the latest version, the '@<version>' can be ommitted.
```
        $ npm install chromedriver@<version> --save-dev
        $ npm install geckodriver@<version> --save-dev

```

    2. The following lines in config files, available in the ./config folder should be updated


## 1.4. **Run the Tests**
The following commands can be used to trigger a test execution:

Complete test execution using Chrome
```
$ npm run test:chrome

```

Smoke test execution using Chrome
```
$ npm run test:chrome:smoke

```

Complete test execution using Firefox
```
$ npm run test:firefox

```

Smoke test execution using Firefox
```
$ npm run test:firefox:smoke

```

Complete test execution in both browsers
```
$ npm run test

```

Smoke test execution in both browsers
```
$ npm run test:smoke

```

## 1.5. **Generate Allure Report**
After test run, the 'allure-results' folder is generated containing all the artifacts to generate an allure report.

Executing the following code will generate the Allure report inside the 'allure-report' folder

```
$ allure generate ./allure-results --clean && allure open

```

## 1.6. **Static Analysis of Code**
Static Analysis helps in assessing the code quality against standards and best practices. 

The following code can be executed to find and fix the linting errors:

To find the coding errors

```
$ npm run lint

```

Fix the identified linting errors and warnings

```
$ npm run lint:fix

```

## 1.7. **Next Steps**
This guide provides an overview on the steps needed to start executing the test cases in the local machine. For a more detailed information on test execution and setting up a test run in Jenkins, refer to the "Automation User Guide" document.
