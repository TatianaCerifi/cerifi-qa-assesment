class LoginPage {
  get userNameInput() {
    return cy.get("#user-name")
  }

  get passwordInput() {
    return cy.get("#password")
  }

  get loginButton() {
    return cy.get("#login-button")
  }

  get logoutButton() {
    return cy.get("#logout_sidebar_link")
  }

  public login(userName: string, password: string) {
    this.userNameInput.type(userName)
    this.passwordInput.type(password)
    this.loginButton.click()
  }

  public loginWithoutUser(password: string) {
    this.passwordInput.type(password)
    this.loginButton.click()
  }

  public logout() {
    cy.clickMenu()
    this.logoutButton.should("be.visible").click()
    this.loginButton.should("be.visible")
  }

  validateLoginError(errorMessage: string) {
    cy.errorMessageContainerIsVisible()
    cy.verifyErrorMessage(errorMessage)
  }
}

export const loginPage: LoginPage = new LoginPage()