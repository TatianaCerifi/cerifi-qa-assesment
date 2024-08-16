import { inventoryPage } from "@/e2e/pages/inventory-page"
import { loginPage } from "@/e2e/pages/login-page"
import { productPage } from "@/e2e/pages/product-page"

describe("Product Functionality", () => {
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

  it("verify product details", { tags: "@smoke" }, () => {
    inventoryPage.selectProduct()
    productPage.verifyProductDetails()
  })
})