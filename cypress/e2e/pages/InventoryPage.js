class InventoryPage {
    // Define element selectors
    elements = {
        productSort: '[data-test="product-sort-container"]',
        shoppingCartBadge: '[data-test="shopping-cart-badge"]',
        shoppingCart: '[data-test="shopping-cart-link"]',
        itemPrice: '[data-test="inventory-item-price"]'
    }

    // Click the shopping cart link
    openShoppingCart() {
        cy.get(this.elements.shoppingCart).click();
    }

    // Get the selector for adding a product to the cart based on the product ID
    getAddToCartSelector(productId) {
        return `[data-test="add-to-cart-${productId}"]`;
    }

    // Get the selector for removing a product from the cart based on the product ID
    getRemoveFromCartSelector(productId) {
        return `[data-test="remove-${productId}"]`;
    }

    // Add a product to the cart using the product ID
    addProductToCart(productId) {
        cy.get(this.getAddToCartSelector(productId)).click();
    }

    // Remove a product from the cart using the product ID
    removeProductFromCart(productId) {
        cy.get(this.getRemoveFromCartSelector(productId)).click();
    }

    // Select sorting by "Name (A to Z)"
    selectNameAtoZSort() {
        cy.get(this.elements.productSort).select('Name (A to Z)');
    }

    // Select sorting by "Name (Z to A)"
    selectNameZtoASort() {
        cy.get(this.elements.productSort).select('Name (Z to A)');
    }

    // Select sorting by "Price (low to high)"
    selectPriceLowToHighSort() {
        cy.get(this.elements.productSort).select('Price (low to high)');
    }

    // Select sorting by "Price (high to low)"
    selectPriceHighToLowSort() {
        cy.get(this.elements.productSort).select('Price (high to low)');
    }
}

// Export an instance of the InventoryPage class
export const inventoryPage = new InventoryPage()