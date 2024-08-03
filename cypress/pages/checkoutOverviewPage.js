/// <reference types="Cypress" />
import { checkoutOverviewElements } from '../elements/checkoutOverviewElements'; 

class CheckoutOverviewPage {

    getProductItems() {
        return cy.get(checkoutOverviewElements.productItem);
    }

    getProductName(itemIndex) {
        return this.getProductItems().get(itemIndex).find(checkoutOverviewElements.productItemName);
    }

    getProductDescription(itemIndex) {
        return this.getProductItems().get(itemIndex).find(checkoutOverviewElements.productItemDescription);
    }

    getProductPrice(itemIndex) {
        return this.getProductItems().get(itemIndex).find(checkoutOverviewElements.productItemPrice);
    }

    getFinishButton() {
        return cy.get(checkoutOverviewElements.finishButton);
    }

    clickFinishButton(itemIndex) {
        this.getFinishButton(itemIndex).click();
    }

    getPaymentInformation() {
        return cy.get(checkoutOverviewElements.paymentInformation);
    }  
    
    getShippingInformation() {
        return cy.get(checkoutOverviewElements.shippingInformation);
    }

    getSubtotal() {
        return cy.get(checkoutOverviewElements.subtotal).invoke('text');
    }

    getTax() {
        return cy.get(checkoutOverviewElements.Tax).invoke('text');
    }

    getTotal() {
        return cy.get(checkoutOverviewElements.Total).invoke('text');
    }

    getFinishButton() {
        return cy.get(checkoutOverviewElements.finishButton);
    }

    async getAllProductPricesSum() {
        let totalSum = 0;
        const items = await this.getProductItems().toArray(); // Convert to array for easy iteration

        for (const item of items) {
            const priceText = await this.getProductPrice(item).invoke('text');
            const priceNumber = parseFloat(priceText.replace('$', '').trim());
            totalSum += priceNumber;
        }

        return totalSum;
    }

    getAllProductPricesSum() {
        let totalSum = 0;
        return new Cypress.Promise((resolve) => {
            this.getProductItems().each(($item) => {
                this.getProductPrice($item).invoke('text').then((text) => {
                    const price = parseFloat(text.replace('$', '').trim());
                    totalSum += price;
                });
            }).then(() => resolve(totalSum)); // Resolve promise with the total sum
        });
    }

    checkSumOfProductsPriceIsEqualToTotalValue() {
        cy.wrap(this.getAllProductPricesSum()).then((totalPrice) => {
            this.getTax().then((taxText) => {
                const cleanedTaxText = taxText.replace('Tax: $', '').trim();
                const tax = parseFloat(cleanedTaxText);

                // Get the subtotal from the page
                this.getTotal().then((totalText) => {
                    const cleanedText = totalText.replace('Total: $', '').trim();
                    const total= parseFloat(cleanedText);
                    const expectedTotalPrice = totalPrice + tax;

                    expect(total).to.be.eq(expectedTotalPrice);
                });
            });
        });
    }
}
export default CheckoutOverviewPage;
