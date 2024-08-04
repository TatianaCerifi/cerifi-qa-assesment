class CartPage {
    // Define element selectors
    elements = {
        continueShoppingButton: '[data-test="continue-shopping"]',
        checkoutButton: '[data-test="checkout"]',
    }

    // Get the selector for removing a product from the cart based on the product ID
    getRemoveFromCartSelector(productId) {
        return `[data-test="remove-${productId}"]`;
    }

    // Remove a product from the cart using the product ID
    removeProductFromCart(productId) {
        cy.get(this.getRemoveFromCartSelector(productId)).click();
    }

    // Click the "Continue Shopping" button
    continueShopping() {
        cy.get(this.elements.continueShoppingButton).click();
    }

    // Click the "Checkout" button
    checkout() {
        cy.get(this.elements.checkoutButton).click();
    }
}

// Export an instance of the CartPage class
export const cartPage = new CartPage()