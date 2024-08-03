/// <reference types="Cypress" />
import { homeElements } from '../elements/homeElements';
class HomePage {
    getshoppingCard() {
        return cy.get(homeElements.shoppingCard);
    }

    getProductItems() {
        return cy.get(homeElements.productItem);
    }

    getProductName(itemIndex) {
        return this.getProductItems().get(itemIndex).find(homeElements.productItemName);
    }

    getProductDescription(itemIndex) {
        return this.getProductItems().get(itemIndex).find(homeElements.productItemDescription);
    }

    getProductPicture(itemIndex) {
        return this.getProductItems().get(itemIndex).find(homeElements.getProductPicture);
    }

    getProductPrice(itemIndex) {
        return this.getProductItems().get(itemIndex).find(homeElements.productItemPrice);
    }

    getAddButton(itemIndex) {
        return this.getProductItems().get(itemIndex).find(homeElements.productItemAddButton);
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

    goToshoppingCard() {
        this.getshoppingCard().click();
    }
}
export default HomePage;
