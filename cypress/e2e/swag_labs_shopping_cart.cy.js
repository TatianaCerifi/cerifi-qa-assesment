const cartPage = require("../pages/cartPage");
const checkoutComplete = require("../pages/checkoutComplete");
const checkoutStepOne = require("../pages/checkoutStepOne");
const checkoutStepTwo = require("../pages/checkoutStepTwo");
const inventoryPage = require("../pages/inventoryPage");
const loginPage = require("../pages/loginPage");

describe('Swag labs shopping cart', () => {

  beforeEach(() => {
    cy.clearAllCookies();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    });
    cy.visit('');
    loginPage.login('standard_user', 'secret_sauce');
  })

  it('logins successfully', () => {
    inventoryPage.elements.inventoryItemTitleList().eq(0).should('be.visible');
  });

  it('lists the inventory correctly', () => {
    inventoryPage.elements.inventoryTitle().should('be.visible');
    inventoryPage.elements.inventoryTitle().should('have.text', 'Products');
    inventoryPage.elements.inventoryShoppingCartBtn().should('be.visible');
    inventoryPage.elements.inventorySortDropDown().should('be.visible');
    inventoryPage.elements.inventoryItemTitleList().should('have.length', 6);
    inventoryPage.elements.inventoryItemPriceList().should('have.length', 6);
    inventoryPage.elements.inventoryItemImgList().should('have.length', 6);
    inventoryPage.elements.addToCartBtnAlltheThingsTShirtRed().should('be.visible');
    inventoryPage.elements.addToCartBtnBackPack().should('be.visible');
    inventoryPage.elements.addToCartBtnBikeLight().should('be.visible');
    inventoryPage.elements.addToCartBtnBoltTShirt().should('be.visible');
    inventoryPage.elements.addToCartBtnFleeceJacket().should('be.visible');
    inventoryPage.elements.addToCartBtnOnesie().should('be.visible');

  });

  it('adds items to the cart', () => {
    inventoryPage.elements.inventoryTitle().should('have.text', 'Products');
    inventoryPage.elements.inventoryShoppingCartBtn().should('be.visible');
    inventoryPage.elements.inventoryItemTitleList().should('have.length', 6);
    inventoryPage.elements.inventoryItemPriceList().should('have.length', 6);
    inventoryPage.elements.inventoryItemImgList().should('have.length', 6);
    inventoryPage.addThreeItemsToTheCart();
    inventoryPage.elements.inventoryShoppingCartBadge().should('have.text', 3);
  });

  it('performs the checkout', () => {
    inventoryPage.elements.inventoryTitle().should('have.text', 'Products');
    inventoryPage.elements.inventoryShoppingCartBtn().should('be.visible');
    inventoryPage.elements.inventoryItemTitleList().should('have.length', 6);
    inventoryPage.elements.inventoryItemPriceList().should('have.length', 6);
    inventoryPage.elements.inventoryItemImgList().should('have.length', 6);
    inventoryPage.elements.inventoryItemPriceList().eq(0).should('have.text', '$29.99');
    inventoryPage.elements.inventoryItemPriceList().eq(1).should('have.text', '$9.99');
    inventoryPage.elements.inventoryItemPriceList().eq(5).should('have.text', '$15.99');
    inventoryPage.addThreeItemsToTheCart();
    inventoryPage.elements.inventoryShoppingCartBadge().should('have.text', 3);
    inventoryPage.clickOnShoppingCart();
    cartPage.elements.cartTitle().should('have.text', 'Your Cart');
    cartPage.elements.cartItemPriceList().should('have.length', 3);
    cartPage.elements.cartItemTitleList().should('have.length', 3);
    cartPage.elements.checkoutBtn().should('be.visible');
    cartPage.elements.cartItemPriceList().eq(0).should('have.text', '$29.99');
    cartPage.elements.cartItemPriceList().eq(1).should('have.text', '$9.99');
    cartPage.elements.cartItemPriceList().eq(2).should('have.text', '$15.99');
    cartPage.clickOnCheckout();
    checkoutStepOne.elements.checkoutStepOneTitle().should('have.text', 'Checkout: Your Information');
    checkoutStepOne.elements.firstNameInput().should('be.visible');
    checkoutStepOne.elements.lastNameInput().should('be.visible');
    checkoutStepOne.elements.postalCodeInput().should('be.visible');
    checkoutStepOne.typeFirstName('Camilo');
    checkoutStepOne.typeLastName('Contreras');
    checkoutStepOne.typePostalCode('111156');
    checkoutStepOne.clickOnContinue();
    checkoutStepTwo.elements.checkoutStepTwoTitle().should('have.text', 'Checkout: Overview');
    checkoutStepTwo.elements.itemQuantityList().eq(0).should('have.text', 1);
    checkoutStepTwo.elements.itemPriceList().eq(0).should('have.text', '$29.99');
    checkoutStepTwo.elements.itemQuantityList().eq(1).should('have.text', 1);
    checkoutStepTwo.elements.itemPriceList().eq(1).should('have.text', '$9.99');
    checkoutStepTwo.elements.itemQuantityList().eq(2).should('have.text', 1);
    checkoutStepTwo.elements.itemPriceList().eq(2).should('have.text', '$15.99');
    checkoutStepTwo.elements.paymentInfoLabel().should('have.text', 'Payment Information:');
    checkoutStepTwo.elements.paymentInfoValue().should('have.text', 'SauceCard #31337');
    checkoutStepTwo.elements.shippingInfoLabel().should('have.text', 'Shipping Information:');
    checkoutStepTwo.elements.shippingInfoValue().should('have.text', 'Free Pony Express Delivery!');
    checkoutStepTwo.elements.totalInfoLabel().should('have.text', 'Price Total');
    checkoutStepTwo.elements.subtotalLabel().should('have.text', 'Item total: $55.97');
    checkoutStepTwo.elements.taxLabel().should('have.text', 'Tax: $4.48');
    checkoutStepTwo.elements.totalLabel().should('have.text', 'Total: $60.45');
    checkoutStepTwo.clickOnFinish();
    checkoutComplete.elements.checkoutCompleteTitle().should('have.text', 'Checkout: Complete!');
    checkoutComplete.elements.completeheader().should('have.text', 'Thank you for your order!');
    checkoutComplete.elements.completeText().should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  });

})
