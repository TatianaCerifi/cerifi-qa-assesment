const loginPage = require('../page-objects/LoginPage')

class LoginSteps {

    open() {
        loginPage.open()
    }

    logIn(user: string, password: string) {
        loginPage.typeUsername(user)
        loginPage.typePassword(password)
        loginPage.clickOnLogin()
    }

    getUserNameField() {
        return loginPage.usernameInput
    }

    getErrorMessage() {
        return loginPage.errorMessage
    }

    getLoginLogo() {
        return loginPage.loginLogo
    }
}

module.exports = new LoginSteps()