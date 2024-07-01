const elements = {
    buttonAddToCart : "[data-test='add-to-cart-sauce-labs-backpack']",
    buttonCart: ".shopping_cart_link",
    titleProducts : '.title',
    buttonHamburgerMenu : '.bm-burger-button',
    buttonLogout : '#logout_sidebar_link'
}

class productListPage {

    addProductToCart(){
        cy.get(elements.buttonAddToCart).click()
    }

    clickCartButton(){
        cy.get(elements.buttonCart).click()
    }

    verifyLoggedIn(){
        cy.get(elements.titleProducts).should('include.text', 'Products')
        cy.get(elements.buttonHamburgerMenu).click()
        cy.get(elements.buttonLogout).should('be.visible')
    }
}

export default new productListPage();