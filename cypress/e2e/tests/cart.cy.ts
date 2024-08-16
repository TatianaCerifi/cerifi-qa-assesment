import { inventoryPage } from "@/e2e/pages/inventory-page"
import { loginPage } from "@/e2e/pages/login-page"
import { cartPage } from "@/e2e/pages/cart-page"
import { productPage } from "@/e2e/pages/product-page"

describe("Cart Functionality", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.fixture("user.json").then((data) => {
      loginPage.login(data.loginSuccess.username, data.loginSuccess.password)
      inventoryPage.verifyLoginSuccess()
    })
  })

  afterEach(() => {
    loginPage.logout()
  })

  it("Add product to cart from product page", () => {
    inventoryPage.selectProduct()
    productPage.verifyProductDetails()
    productPage.addToCart()
    inventoryPage.goToCart()
    cartPage.verifyItemInCart()
  })

  it("Add product to cart", { tags: "@smoke" }, () => {
    inventoryPage.addProductToCart()
    inventoryPage.goToCart()
    cartPage.verifyItemInCart()
  })

  it("Add other product to cart", () => {
    inventoryPage.addProductToCart()
    inventoryPage.goToCart()
    cartPage.verifyItemInCart()
    cartPage.continueShopping()
    inventoryPage.addOtherProductToCart()
    inventoryPage.goToCart()
    cartPage.verifyMultipleItemsInCart()
  })

  it("Add multiple products to cart", () => {
    inventoryPage.addMultipleProductsToCart()
    inventoryPage.goToCart()
    cartPage.verifyMultipleItemsInCart()
  })

  it("Remove product from inventory page", () => {
    inventoryPage.addProductToCart()
    inventoryPage.removeFromCart()
  })

  it("Remove product from cart", { tags: "@smoke" }, () => {
    inventoryPage.addProductToCart()
    inventoryPage.goToCart()
    cartPage.verifyItemInCart()
    cartPage.removeFromCart()
  })

  it("Remove multiple products from cart", () => {
    inventoryPage.addMultipleProductsToCart()
    inventoryPage.goToCart()
    cartPage.verifyMultipleItemsInCart()
    cartPage.removeMultipleItemsFromCart()
  })

  it("Reset app status", { tags: "@bug" }, () => {
    inventoryPage.addProductToCart()
    inventoryPage.resetApp()
  })
})