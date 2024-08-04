class CheckoutStepTwoPage {
    // Define element selectors
    elements = {
        finish: '[data-test="finish"]',
        cancelButton: '[data-test="cancel"]',
        paymentInformation: '[data-test="payment-info-value"]',
        shippingInformation: '[data-test="shipping-info-value"]',
        priceTotal: '[data-test="total-label"]',
    }

    // Click the "Finish" button
    finish = () => cy.get(this.elements.finish).click()

    // Click the "Cancel" button
    cancelButton = () => cy.get(this.elements.cancelButton).click()

    // Get the payment information element
    paymentInformation = () => cy.get(this.elements.paymentInformation)

    // Get the shipping information element
    shippingInformation = () => cy.get(this.elements.shippingInformation)

    // Get the total price element
    priceTotal = () => cy.get(this.elements.priceTotal)
}

// Export an instance of the CheckoutStepTwoPage class
export const checkoutStepTwoPage = new CheckoutStepTwoPage()