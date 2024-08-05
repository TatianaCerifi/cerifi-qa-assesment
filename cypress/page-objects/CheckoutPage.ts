class CheckoutPage {

    get checkoutTitle() {
        return cy.get('[data-test="title"]')
    }

    get firstNameField() {
        return cy.get('#first-name')
    }

    get lastnameField() {
        return cy.get('#last-name')
    }

    get zipField() {
        return cy.get('#postal-code')
    }

    get continueButton() {
        return cy.get('#continue')
    }

    get finishButton() {
        return cy.get('[data-test="finish"]')
    }

    get checkoutMessage() {
        return cy.get('[data-test="complete-header"]')
    }

    fillZipField(code: string) {
        let field = this.zipField
        field.clear()
        field.type(code)
    }

    fillFirstNameField(firstName: string) {
        let field = this.firstNameField
        field.clear()
        field.type(firstName)
    }

    fillLastNameField(lastName: string) {
        let field = this.lastnameField
        field.clear()
        field.type(lastName)
    }

    clickOnContinueButton() {
        this.continueButton.click()
    }

    clickOnFinishButton() {
        this.finishButton.click()
    }
}

module.exports = new CheckoutPage()