/// <reference types="Cypress" />
import { loginElements } from '../elements/loginElements'; 
class LoginPage {
    visit(route) {
        cy.visit(route);
    }

    fillUsername(username) {
        cy.get(loginElements.usernameInput).type(username);
    }
    fillPassword(password) {
        cy.get(loginElements.passwordInput).type(password);
    }
    submit() {
        cy.get(loginElements.loginButton).click();
    }
    getErrorMessage() {
        return cy.get(loginElements.errorMessage);
    }

    loginAs(userType) {
        cy.visit('/');
        const user = Cypress.env('users')[userType];
        this.fillUsername(user.username);
        this.fillPassword(user.password);
        this.submit();
    }
}
export default LoginPage;
