import { loginPage } from "@/e2e/pages/login-page"
import { inventoryPage } from "@/e2e/pages/inventory-page"

let userdata: {
  loginSuccess: { username: string; password: string }
  loginBlocked: { username: string; password: string; expected: string }
  loginError: { username: string; password: string; expected: string }
  loginEmpty: { password: string; expected: string }
}

describe("Login Functionality", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.fixture("user.json").then((data) => {
      userdata = data
    })
  })

  it("Login with valid credentials", { tags: "@smoke" }, () => {
    loginPage.login(
      userdata.loginSuccess.username,
      userdata.loginSuccess.password
    )
    inventoryPage.verifyLoginSuccess()
  })

  it("Login with locked credentials", () => {
    loginPage.login(
      userdata.loginBlocked.username,
      userdata.loginBlocked.password
    )
    loginPage.validateLoginError(userdata.loginBlocked.expected)
  })

  it("Login with wrong credentials", { tags: "@smoke" }, () => {
    loginPage.login(userdata.loginError.username, userdata.loginError.password)
    loginPage.validateLoginError(userdata.loginError.expected)
  })

  it("Login with empty credentials", () => {
    loginPage.loginWithoutUser(userdata.loginEmpty.password)
    loginPage.validateLoginError(userdata.loginEmpty.expected)
  })
})