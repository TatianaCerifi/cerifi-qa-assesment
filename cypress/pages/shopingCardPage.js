/// <reference types="Cypress" />
import { shopingCardElements } from '../elements/shopingCardElements';
class HomePage {
    getshoppingCard() {
        return cy.get(shopingCardElements.shoppingCard);
    }

    getProductItems() {
        return cy.get(shopingCardElements.productItem);
    }

    getProductName(itemIndex) {
        return this.getProductItems().get(itemIndex).find(shopingCardElements.productItemName);
    }

    getProductDescription(itemIndex) {
        return this.getProductItems().get(itemIndex).find(shopingCardElements.productItemDescription);
    }

    getProductPrice(itemIndex) {
        return this.getProductItems().get(itemIndex).find(shopingCardElements.productItemPrice);
    }

    getAddButton(itemIndex) {
        return this.getProductItems().get(itemIndex).find(shopingCardElements.checkoutButton);
    }

    getCheckoutButton() {
        return cy.get(shopingCardElements.checkoutButton);
    }

    clickAddButton(itemIndex) {
        this.getAddButton(itemIndex).click();
    }

    assertProductPriceContainsPriceChar(itemIndex) {
        this.getProductPrice(itemIndex).should('contain.text', "$");
    }

    addAllProductsToCart() {
        this.getProductItems().each((index) => {
            this.getAddButton(index).click();
        });
    }

    assertAllProductsContainsPriceChar() {
        this.getProductItems().each((index) => {
            this.getProductPrice(index).should('contain.text', "$");
        });
    }

    goCheckout() {
        this.getCheckoutButton().click();
    }
}
export default HomePage;
