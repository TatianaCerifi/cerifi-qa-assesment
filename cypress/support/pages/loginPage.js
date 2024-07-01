const elements = {
    inputUsername : '[data-test="username"]',
    inputPassword : '[data-test="password"]',
    buttonLogin : '[data-test="login-button"]',
}

class loginPage {
    loginWithStandartUser() {
        cy.get(elements.inputUsername).type("standard_user")
        cy.get(elements.inputPassword).type("secret_sauce")
        cy.get(elements.buttonLogin).click()
    }
}

export default new loginPage();