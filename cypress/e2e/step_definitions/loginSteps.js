import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/login';

const loginPage = new LoginPage()

Given('I open the website', () => {
  cy.visit('/');
});

When('I enter my username {string} and password {string}', (username, password) => {
  loginPage.typeUsername(username);
  loginPage.typePassword(password);
});

And('I click the login button', () => {
  loginPage.clickLogin();
});

Then('I should be logged in', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
  cy.get('.app_logo').should('be.visible').contains('Swag Labs');
});