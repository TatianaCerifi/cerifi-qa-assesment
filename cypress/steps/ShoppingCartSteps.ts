const shoppingPage = require('../page-objects/ShoppingCartPage')


class ShoppingCartSteps {


    getCartTitle() {
        return shoppingPage.cartTitle
    }

    getCartItems() {
        return shoppingPage.cartItems
    }

    clickOnCheckout() {
        shoppingPage.clickOnCheckout()
    }

    removeItem(itemName: string) {
        shoppingPage.cartItems.each((product) => {
            if (product.find('div.inventory_item_name').text() === itemName) {
                product.find('button.cart_button').get(0).click()
            }
        })
    }

}

module.exports = new ShoppingCartSteps()