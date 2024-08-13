class loginPage {
  elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginBtn: () => cy.get('#login-button')
  }

  login(userName, password) {
    this.elements.usernameInput().type(userName);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

}

module.exports = new loginPage();
