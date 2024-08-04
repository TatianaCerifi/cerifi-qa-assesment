class LoginPage {
    // Define selectors for the login page elements
    elements = {
        username: '[data-test="username"]',
        password: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        errorMessage: '[data-test="error"]'
    }

    // Get the username input element
    inputUsername = () => cy.get(this.elements.username)

    // Get the password input element
    inputPassword = () => cy.get(this.elements.password)

    // Get the login button element
    loginButton = () => cy.get(this.elements.loginButton)

    // Get the error message element
    errorMessage = () => cy.get(this.elements.errorMessage)

    /**
     * Logs in with the given username and password
     * @param {string} username - The username to log in with
     * @param {string} password - The password to log in with
     */
    login(username, password) {
        this.inputUsername().type(username)
        this.inputPassword().type(password)
        this.loginButton().click()
    }
}

// Export an instance of the LoginPage class
export const loginPage = new LoginPage()