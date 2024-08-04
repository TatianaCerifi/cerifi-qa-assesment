import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from "../../../e2e/pages/LoginPage";
import {cartPage} from "../../../e2e/pages/CartPage";
import {checkoutStepOnePage} from "../../../e2e/pages/CheckoutStepOnePage";
import {checkoutCompletePage} from "../../../e2e/pages/CheckoutCompletePage";
import {checkoutStepTwoPage} from "../../../e2e/pages/CheckoutStepTwoPage";
import  {inventoryPage} from "../../../e2e/pages/InventoryPage";

Given('I logged in on SwagLabs page', () => {
    cy.visit('/')
    loginPage.login('standard_user', 'secret_sauce')
});

When('I add a product', () => {
    inventoryPage.addProductToCart('sauce-labs-backpack')
});

Then('I proceed to cart', () => {
    inventoryPage.openShoppingCart()
});

Then('I should see the product in the cart and badge updated', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    cy.get(cartPage.elements.checkoutButton).should('be.visible')
    cy.get(cartPage.getRemoveFromCartSelector('sauce-labs-backpack')).should('be.visible')
});

When('I proceed to checkout', () => {
    cartPage.checkout()
});

Then('I fill the form', () => {
    checkoutStepOnePage.fillFormAndContinue('John', 'Doe', '12345')
});

Then('I should see my order information', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
    cy.get(checkoutStepTwoPage.elements.paymentInformation).should('be.visible')
    cy.get(checkoutStepTwoPage.elements.shippingInformation).should('be.visible')
    cy.get(checkoutStepTwoPage.elements.priceTotal).should('be.visible')
    cy.get(checkoutStepTwoPage.elements.finish).should('be.visible')
});

When('I proceed to finish', () => {
    checkoutStepTwoPage.finish()
});

Then('I should see the checkout complete page', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    cy.get(checkoutCompletePage.elements.completeHeader).should('be.visible', 'Thank you for your order!')
    cy.get(checkoutCompletePage.elements.completeText).should('be.visible')
    cy.get(checkoutCompletePage.elements.backToHomeButton).should('be.visible')
    cy.get(checkoutCompletePage.elements.backToHomeButton).should('be.visible')
});
