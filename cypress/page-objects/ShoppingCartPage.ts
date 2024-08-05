class ShoppingCartPage {

    get cartItems() {
        return cy.get('[data-test="inventory-item"]')
    }

    get cartTitle() {
        return cy.get('[data-test="title"]')
    }

    get checkoutButton() {
        return cy.get('#checkout')
    }

    clickOnCheckout() {
        this.checkoutButton.click()
    }
}

module.exports = new ShoppingCartPage()
