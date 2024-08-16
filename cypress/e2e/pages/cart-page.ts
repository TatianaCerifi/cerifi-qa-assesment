class CartPage {
  get cartItem() {
    return cy.get(".cart_item")
  }

  get removeFromCartButton() {
    return cy.get(".cart_item .btn_secondary")
  }

  get continueShoppingButton() {
    return cy.get("#continue-shopping")
  }

  get checkoutButton() {
    return cy.get("#checkout")
  }

  public verifyItemInCart() {
    this.cartItem.should("be.visible")
    this.removeFromCartButton.should("be.visible")
  }

  public verifyMultipleItemsInCart() {
    this.cartItem.each(($el, index) => {
      cy.wrap($el).should("be.visible")
      cy.wrap($el)
        .find(".inventory_item_name")
        .then(($itemName) => {
          cy.get(`@itemName${index}`).then((itemName) => {
            cy.wrap($itemName).should("have.text", itemName)
          })
        })
      cy.wrap($el).find(".btn_secondary").should("be.visible")
    })
  }

  public removeFromCart() {
    cy.get("@itemName0").then((itemName) => {
      cy.cartItemName().should("have.text", itemName)
    })
    this.removeFromCartButton.should("be.visible")
    this.removeFromCartButton.click()
    this.cartItem.should("not.exist")
    cy.cartBadge().should("not.exist")
  }

  public removeMultipleItemsFromCart() {
    this.cartItem.first().should("be.visible").click()
    this.cartItem.each(($el, index) => {
      cy.wrap($el).find(".inventory_item_name").then(($itemName) => {
        cy.wrap($itemName.text()).as(`itemName${index}`)
      })
      cy.wrap($el).find(".btn_secondary").should("be.visible").click()
    })
    cy.cartBadge().should("not.exist")
    this.cartItem.should("not.exist")
  }

  public continueShopping() {
    this.continueShoppingButton.should("be.visible").click()
  }

  public checkout() {
    this.checkoutButton.should("be.visible").click()
  }
}

export const cartPage: CartPage = new CartPage()