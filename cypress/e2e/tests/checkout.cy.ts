import { cartPage } from "@/e2e/pages/cart-page"
import { checkoutPage } from "@/e2e/pages/checkout-page"
import { inventoryPage } from "@/e2e/pages/inventory-page"
import { loginPage } from "@/e2e/pages/login-page"
import { productPage } from "@/e2e/pages/product-page"

describe("Checkout Functionality", () => {
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

  it("verify checkout", { tags: "@e2e" }, () => {
    inventoryPage.selectProduct()
    productPage.verifyProductDetails()
    productPage.addToCart()
    inventoryPage.goToCart()
    cartPage.verifyItemInCart()
    cartPage.checkout()
    cy.fixture("checkout-data.json").then((data) => {
      checkoutPage.fillDataCheckout(data)
    })
    checkoutPage.verifySummaryInfo()
    checkoutPage.finishPurchase()
  })

  it("verify checkout with empty fields", () => {
    inventoryPage.selectProduct()
    productPage.verifyProductDetails()
    productPage.addToCart()
    inventoryPage.goToCart()
    cartPage.verifyItemInCart()
    cartPage.checkout()
    cy.fixture("checkout-data.json").then((data) => {
      checkoutPage.fillDataCheckoutWithEmptyFields(data)
    })
  })
})