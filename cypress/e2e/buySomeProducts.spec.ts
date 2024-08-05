const login = require('../steps/LoginSteps')
const product = require('../steps/ProductSteps')
const cart = require('../steps/ShoppingCartSteps')
const checkout = require('../steps/CheckoutSteps')

describe('e2e buy some products', () => {
    beforeEach(() => {
        login.open()
    })

    it(`I should be able to buy some products `, () => {
        login.logIn('standard_user', 'secret_sauce')
        product.getProductLabel()
            .should('be.visible')
            .and('have.text', 'Products')
        product.getProducts().should('have.length', 6)
        product.addProductsToCart(['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Onesie'])
        product.getCartCount().should('have.text', '3')
        product.clickOnCart()
        cart.getCartTitle().should('have.text', 'Your Cart')
        cart.removeItem('Sauce Labs Onesie')
        cart.getCartItems().should('have.length', 2)
        cart.clickOnCheckout()
        checkout.getCheckoutTitle().should('have.text', 'Checkout: Your Information')
        checkout.fillsCheckout('user-name', 'user-last-name', '9999')
        checkout.clickOnFinishButton()
        checkout.getCheckoutMessage().should('have.text', 'Thank you for your order!')
    })
})