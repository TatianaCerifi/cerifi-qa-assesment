import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';

describe('Negative Login Test Flow', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
    it('should check message of a locked out user', () => {
      cy.visit('https://www.saucedemo.com/');
      loginPage.loginAs('locked');
      loginPage.getErrorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
      homePage.getshoppingCard().should('not.exist');
  });
});
