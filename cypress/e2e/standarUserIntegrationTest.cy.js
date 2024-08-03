/// <reference types="Cypress" />

import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import ShopingCardPage from '../pages/shopingCardPage';
import CheckoutPage from '../pages/checkoutPage';
import CheckoutOverviewPage from '../pages/checkoutOverviewPage';
import OrderFinishedPage from '../pages/orderFinishedPage';

describe('Standar user integration test', () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const shopingCardPage = new ShopingCardPage();
  const checkoutPage = new CheckoutPage();
  const checkoutOverviewPage = new CheckoutOverviewPage();
  const orderFinishedPage = new OrderFinishedPage();

    it('should complete the full flow with the standar user', () => {
      loginPage.loginAs('standard');
      homePage.getshoppingCard().should('exist');
      cy.getLocation().should('eq', '/inventory.html');
      homePage.getProductItems().should('have.length', 6);
      homePage.assertAllProductsContainsPriceChar();
      homePage.addAllProductsToCart();
      homePage.goToshoppingCard();
      shopingCardPage.assertAllProductsContainsPriceChar();
      shopingCardPage.getProductItems().should('have.length', 6);
      shopingCardPage.goCheckout();
      checkoutPage.setUserInformation();
      checkoutOverviewPage.getProductItems().should('have.length', 6);
      checkoutOverviewPage.checkSumOfProductsPriceIsEqualToTotalValue();
      checkoutOverviewPage.clickFinishButton();
      orderFinishedPage.getThankYouMessage().should('have.text', 'Thank you for your order!');
      orderFinishedPage.getThankYouInformationMessage().should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
      orderFinishedPage.gotBackToHome();
      cy.getLocation().should('eq', '/inventory.html');
    });
});
