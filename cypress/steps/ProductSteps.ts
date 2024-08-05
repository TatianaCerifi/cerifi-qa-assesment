const productPage = require('../page-objects/ProductPage')

class ProductSteps {

    getProducts() {
        return productPage.productItems
    }

    getProductLabel() {
        return productPage.productLabel
    }

    getCartCount() {
        return productPage.cartCountLabel
    }

    addProductsToCart(selection: string[]) {
        let products = productPage.productItems
        selection.forEach((productName: string) => {
            products.each((product) => {
                if (product.find('div.inventory_item_name').text() === productName) {
                    product.find('button.btn_inventory').get(0).click()
                }
            })
        });
    }

    clickOnCart() {
        productPage.clickOnCart()
    }
}

module.exports = new ProductSteps()