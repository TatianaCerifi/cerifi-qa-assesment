
# Cypress POM BDD SwagLabs Project

Creating a simple, scalable, and user-friendly framework to apply Cypress knowledge effectively.

## Running Tests

To run tests, run the following command

```bash
  npm run cy:open
```

In the Cypress Test Runner, choose one of the following test suites to run:
```bash
    TC1_Login.feature
    TC2_PurchaseProducts.feature
```

## Running Tests

```bash
  npm run cy:open
```

In the Cypress Test Runner, choose one of the following test suites to run:
```bash
    TC1_Login.feature
    TC2_PurchaseProducts.feature
```
## Framework Explanation

### Design Pattern Used

The framework is built using the Page Object Model (POM) design pattern. POM is a popular design pattern in test automation that helps to create object repositories for web elements. It provides a clear separation between test code and page-specific code, making tests more readable, maintainable, and reusable.

- **Modularity**: Each page of the application has a corresponding page object class that contains the elements and actions that can be performed on that page.
- **Readability**: Test scripts are easier to read and understand, as they are written in a high-level language that mirrors the actions of a user.
- **Maintainability**: Changes to the UI can be easily managed by updating the page objects, without affecting the test scripts.
- **Reusability**: Common actions and elements are encapsulated within page objects, which can be reused across multiple test cases.
# Project Structure and Future-proofing Explanation

## Project Structure

The project is organized into the following directories and files:

```bash
cerifi-qa-assesment/
├── .idea/
├── cypress/
│   ├── downloads/
│   ├── e2e/
│   │   ├── features/
│   │   │   ├── TC1_Login.feature
│   │   │   └── TC2_PurchaseProducts.feature
│   │   ├── pages/
│   │   │   ├── CartPage.js
│   │   │   ├── CheckoutCompletePage.js
│   │   │   ├── CheckoutStepOnePage.js
│   │   │   ├── CheckoutStepTwoPage.js
│   │   │   ├── InventoryPage.js
│   │   │   └── LoginPage.js
│   ├── fixtures/
│   ├── screenshots/
│   ├── support/
│   │   ├── step_definitions/
│   │   │   ├── TC1/
│   │   │   │   └── TC1_Login.spec.js
│   │   │   └── TC2/
│   │   │       └── TC2_PurchaseProducts.spec.js
│   │   ├── commands.js
│   │   └── e2e.js
├── node_modules/
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Explanation of the Structure

### `cypress/e2e/features/`

This directory contains the feature files written in Gherkin syntax. Each feature file represents a specific functionality or user story that is being tested.
- `TC1_Login.feature`: Contains test scenarios for the login functionality.
- `TC2_PurchaseProducts.feature`: Contains test scenarios for the purchase workflow.

### `cypress/e2e/pages/`

This directory contains the Page Object Model (POM) classes. Each class represents a page in the application and encapsulates the elements and actions that can be performed on that page.
- `CartPage.js`: Contains elements and actions related to the cart page.
- `CheckoutCompletePage.js`: Contains elements and actions related to the checkout complete page.
- `CheckoutStepOnePage.js`: Contains elements and actions related to the first step of the checkout process.
- `CheckoutStepTwoPage.js`: Contains elements and actions related to the second step of the checkout process.
- `InventoryPage.js`: Contains elements and actions related to the inventory page.
- `LoginPage.js`: Contains elements and actions related to the login page.


### `cypress/support/step_definitions/`

This directory contains the step definitions for the feature files. Each step definition file corresponds to a feature file and contains the implementation of the steps defined in that feature.
- `TC1_Login.spec.js`: Implements the steps for the login feature.
- `TC2_PurchaseProducts.spec.js`: Implements the steps for the purchase workflow.

### `cypress/support/`

This directory contains additional support files such as custom commands and configuration files for end-to-end testing.
- `commands.js`: Contains custom Cypress commands.
- `e2e.js`: Contains configuration for end-to-end tests.

### `fixtures/`, `downloads/`, `screenshots/`

These directories are used to store fixtures (sample data), downloaded files during tests, and screenshots taken during test execution, respectively.

## Future-proofing

### Scalability

- **Modular Structure**: The project is organized in a modular way, separating features, page objects, and step definitions. This makes it easy to add new features and test cases without affecting existing ones.
- **Page Object Model (POM)**: Using POM ensures that any changes in the UI can be handled by updating the page objects without modifying the test cases. This makes the framework adaptable to UI changes.

### Maintainability

- **Clear Directory Structure**: The clear separation of concerns in the directory structure makes it easy to locate and update specific parts of the codebase.
- **Reusable Components**: Common actions and elements are encapsulated within page objects, which can be reused across multiple test cases, reducing code duplication and improving maintainability.
- **Comprehensive Documentation**: Detailed documentation in the README and other appropriate files ensures that new team members can quickly get up to speed and follow consistent practices.

### Extensibility

- **Integration with CI/CD**: The framework can be easily integrated into Continuous Integration/Continuous Deployment (CI/CD) pipelines to run tests automatically on each code change.
- **Plugin Support**: Cypress supports a variety of plugins that can be added to enhance testing capabilities, such as visual testing or accessibility checks.
- **Custom Commands**: Custom commands can be created to encapsulate complex actions, making tests simpler and reducing code duplication.

By adhering to these principles and practices, the framework ensures long-term usability and adaptability as the application evolves.
## Why Login and Purchase Were Chosen as Critical Test Cases to Automate

### Login Test Cases
- **Entry Point to the Application**: The login functionality is the primary entry point to the application. Ensuring its reliability is crucial because all subsequent actions depend on the user being able to log in successfully.
- **Security**: Login mechanisms often include security features such as authentication, authorization, and user session management. Automating these test cases helps in quickly identifying security vulnerabilities.
- **High Usage Frequency**: Login is one of the most frequently used features. Any failure in the login functionality can result in significant downtime and a poor user experience.
- **Foundation for Other Tests**: Successful login is a prerequisite for other workflows and functionalities in the application. Automating login tests ensures that other automated tests can reliably proceed.

### Purchase Test Cases
- **Core Business Functionality**: The purchase process is central to the application's purpose, especially for e-commerce platforms. Ensuring that users can complete purchases smoothly is critical for business operations.
- **Revenue Generation**: The purchase workflow directly impacts revenue. Any issues in this process can lead to loss of sales and affect the company's bottom line.
- **Complex Workflow**: The purchase process typically involves multiple steps, such as adding items to the cart, entering payment information, and confirming the order. Automating these steps ensures that each part of the workflow functions correctly.
- **User Satisfaction**: A seamless purchase experience enhances user satisfaction and increases the likelihood of repeat business. Automated tests help maintain a high-quality user experience.

### Summary
Automating the login and purchase test cases ensures that the most critical and frequently used functionalities of the application are reliable and secure. This approach not only improves user satisfaction but also safeguards the business's revenue and reputation.