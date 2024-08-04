import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from "../../../e2e/pages/LoginPage";

// Background step: Navigate to the login page
Given('I on the login SwagLabs page', () => {
    cy.visit('/')
});

// Valid credentials step: Enter valid username and password and click the login button
When(/^I login with valid username (.*) and password (.*)$/, function (username, password) {
    loginPage.login(username, password)
});

// Assertion step: Verify that the user is logged in
Then('I should be logged in', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
});

// Invalid credentials step: Enter invalid username and password and click the login button
When(/^I login with invalid username (.*) and password (.*)$/, function (username, password) {
    loginPage.login(username, password)
});

// Assertion step: Verify that the correct error message is displayed
Then(/^I should see the error message (.*)$/, function (message) {
    loginPage.errorMessage().should('have.text', message)
});