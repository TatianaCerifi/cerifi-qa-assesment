class LoginPage {

    get usernameInput() {
        return cy.get('#user-name')
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get loginButton() {
        return cy.get('#login-button')
    }

    get errorMessage() {
        return cy.get('[data-test="error"]')
    }

    get loginLogo() {
        return cy.get('.login_logo')
    }

    open() {
        cy.visit('https://www.saucedemo.com/')
    }

    typeUsername(loginUsername: string) {
        this.usernameInput.clear().type(loginUsername)
    }

    typePassword(loginPassword: string) {
        this.passwordInput.clear().type(loginPassword)
    }

    clickOnLogin() {
        this.loginButton.click()
    }

}

module.exports = new LoginPage()