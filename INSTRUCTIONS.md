# Saucedemo automation

This framework was built using [Cypress](https://docs.cypress.io/guides/overview/why-cypress) and implements the [Page Object Model](https://medium.com/@rajesh.yemul_42550/cypress-e2e-automation-framework-using-typescript-with-mochawesome-reporter-db279640c120) design pattern to enhance code maintainability, reusability, and scalability.

Instead of using a class to hold shared functionalities, I opted to leverage Cypress’s features. By utilizing **Cypress commands**, I can access these shared functionalities across all test scripts, promoting better organization and reusability.

`/cypress/support/commands.ts`

Another feature implemented in this framework is **Cypress fixtures**, which are used to manage the data during test execution.

`/cypress/fixtures/user.json`

`/cypress/fixtures/checkout-data.json`

The page objects are stored in the **pages** folder, which is designed to easily accommodate new integrations. This framework was intentionally built with scalability and future expansion in mind.

```
/cypress/e2e/pages/

    cart-page.ts
    checkout-page.ts
    inventory-page.ts
    login-page.ts
    product-page.ts
```

Similarly, the test cases are stored in the **test** folder, allowing for seamless expansion of the test suite.

```
/cypress/e2e/tests/

    cart.cy.ts
    checkout.cy.ts
    login.cy.ts
    product.cy.ts
```

This framework uses the [Cypress-grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep) plugin to execute tests based on conditions such as prioritization or urgency. This plugin allows us to easily filter tests by tags or text. For this use case, I am particularly interested in using tags as the filtering mechanism. To leverage the ability to filter tests, you need to pass extra parameters to Cypress using the --env option in the CLI along with the cypress run command:

```typescript
it("Login with valid credentials", { tags: '@smoke' }, () => {})
```
```bash
npx cypress run --env grepTags="@smoke"
```

The report was generated using the [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter) and is stored in the following location:

`/cypress/reports/cypress-report.html`

## Installation

Once you have this project set up in your local environment, you can run the following command in the root folder to install all the necessary dependencies for the project:

```bash
npm install
```
**Note:** Cypress requires **Node.js** 18.x, 20.x, 22.x and above

## Running Tests

A list of commands can be found in the `package.json` file, which includes options to open the Cypress dashboard, run tests from the CLI, and generate test result reports. The commands are as follows:

To open the Cypress dashboard and run the selected tests with a local instance of the service, use the following command. The dashboard also has the ability to re-run tests automatically whenever changes to the code are saved in the editor.

```
npm run cypress:open
```

To run all the tests in Chrome via the command line, use the following command. The test results will be printed in the terminal, and for any failed tests, screenshots will be captured along with files for generating visual reports.

```
npm cypress:run
```

**Author**: Juan Esteban Muñoz Hoyos -
Test Automation Engineer