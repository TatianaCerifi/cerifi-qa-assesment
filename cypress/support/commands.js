import loginPage from '../pages/loginPage';
const LoginPage = new loginPage();

Cypress.Commands.add("authentication", function (userName) {
    cy.fixture("users").then((userData)=>{
        LoginPage.login(userData, userName);
    })
});