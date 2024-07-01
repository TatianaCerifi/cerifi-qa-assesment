const elements = {
    badgeShoppingCart : '.shopping_cart_badge',
    textProductName : '.inventory_item_name'
}

class cartPage {
    verifyProductAdded () {
        cy.get(elements.badgeShoppingCart).should('be.visible')
        cy.get(elements.textProductName).should('have.text', 'Sauce Labs Backpack')
    }
}

export default new cartPage();