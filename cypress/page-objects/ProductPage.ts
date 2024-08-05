class ProductPage {

    get productItems() {
        return cy.get('[data-test=\'inventory-item\']')
    }

    get productLabel() {
        return cy.get('[data-test="title"]')
    }

    get cartLink() {
        return cy.get('[data-test="shopping-cart-link"]')
    }

    get cartCountLabel() {
        return cy.get('[data-test="shopping-cart-badge"]')
    }

    clickOnCart() {
        this.cartLink.click()
    }

}

module.exports = new ProductPage()