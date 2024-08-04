class CheckoutCompletePage {
    // Define element selectors
    elements = {
        completeHeader: '[data-test="complete-header"]',
        completeText: '[data-test="complete-text"]',
        backToHomeButton: '[data-test="back-to-products"]'
    }

    // Get the complete header element
    completeHeader = () => cy.get(this.elements.completeHeader)

    // Get the complete text element
    completeText = () => cy.get(this.elements.completeText)

    // Click the "Back to Home" button
    backToHomeButton = () => cy.get(this.elements.backToHomeButton).click()
}

// Export an instance of the CheckoutCompletePage class
export const checkoutCompletePage = new CheckoutCompletePage()