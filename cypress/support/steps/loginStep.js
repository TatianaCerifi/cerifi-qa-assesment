import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../pages/loginPage'

Given('visit swaglab website', function () {
   cy.visit("https://www.saucedemo.com/")
});

When('login with standart user', function () {
   loginPage.loginWithStandartUser()
})