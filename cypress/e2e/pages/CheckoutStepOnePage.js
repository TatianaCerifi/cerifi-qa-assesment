class CheckoutStepOnePage {
    // Define element selectors
    elements = {
        firstName: '[data-test="firstName"]',
        lastName: '[data-test="lastName"]',
        zipCode: '[data-test="postalCode"]',
        continueButton: '[data-test="continue"]',
        cancelButton: '[data-test="cancel"]'
    }

    // Get the first name input element
    inputFirstName = () => cy.get(this.elements.firstName)

    // Get the last name input element
    inputLastName = () => cy.get(this.elements.lastName)

    // Get the zip code input element
    inputZipCode = () => cy.get(this.elements.zipCode)

    // Click the "Continue" button
    continue = () => cy.get(this.elements.continueButton).click()

    // Click the "Cancel" button
    cancel = () => cy.get(this.elements.cancelButton).click()

    // Fill in the form with the provided first name, last name, and zip code, then click continue
    fillFormAndContinue(firstName, lastName, zipCode) {
        this.inputFirstName().type(firstName)
        this.inputLastName().type(lastName)
        this.inputZipCode().type(zipCode)
        this.continue()
    }
}

// Export an instance of the CheckoutStepOnePage class
export const checkoutStepOnePage = new CheckoutStepOnePage()