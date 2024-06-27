import 'cypress-xpath';

class LoginPage{
    elements ={
        userField : () => cy.get('[data-test="username"]'),
        passwordField : () => cy.get('[data-test="password"]'),
        loginBtn : () => cy.get('[data-test="login-button"]')
    }
    typeUsername(username){
        this.elements.userField().debug();
        this.elements.userField().type(username);
    }
    typePassword(password){
        this.elements.passwordField().should("be.enabled").click();
        this.elements.passwordField().type(password);
    }
    clickLogin(){
        this.elements.loginBtn().should("be.enabled").click();
    }
}
export default LoginPage;
