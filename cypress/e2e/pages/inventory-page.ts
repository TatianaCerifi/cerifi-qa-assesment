class InventoryPage {
  get inventoryTitle() {
    return cy.get("span[data-test='title']")
  }

  get inventoryItem() {
    return cy.get(".inventory_item")
  }

  get inventoryItemName() {
    return cy.get(".inventory_item .inventory_item_name")
  }

  get inventoryItemImage() {
    return cy.get(".inventory_item .inventory_item_img")
  }

  get inventoryItemDescription() {
    return cy.get(".inventory_item .inventory_item_description")
  }

  get addToCartButton() {
    return cy.get(".inventory_item .btn_primary")
  }

  get removeFromCartButton() {
    return cy.get(".inventory_item .btn_secondary")
  }

  get resetAppButton() {
    return cy.get("#reset_sidebar_link")
  }

  public verifyLoginSuccess() {
    this.inventoryTitle.should("have.text", "Products")
  }

  public selectProduct() {
    this.inventoryItem.first().should("be.visible")
    this.inventoryItemName.first().then(($itemName) => {
      cy.wrap($itemName.text()).as("itemName0")
    })
    this.inventoryItemImage.first().click()
  }

  public addProductToCart() {
    this.inventoryItem.first().should("be.visible")
    this.inventoryItemImage.first().should("be.visible")
    this.inventoryItemDescription.first().should("be.visible")
    this.inventoryItemName.first().then(($itemName) => {
      cy.wrap($itemName.text()).as("itemName0")
    })
    this.addToCartButton.first().should("be.visible").click()
    this.removeFromCartButton.first().should("be.visible")
    cy.cartBadge().should("be.visible")
    cy.cartBadge().should("have.text", "1")
  }

  public addOtherProductToCart() {
    this.inventoryItem.last().should("be.visible")
    this.inventoryItemImage.last().should("be.visible")
    this.inventoryItemDescription.last().should("be.visible")
    this.inventoryItemName.last().then(($itemName) => {
      cy.wrap($itemName.text()).as("itemName1")
    })
    this.addToCartButton.last().should("be.visible").click()
    this.removeFromCartButton.last().should("be.visible")
    cy.cartBadge().should("be.visible")
    cy.cartBadge().should("have.text", "2")
  }

  public addMultipleProductsToCart() {
    this.inventoryItem.first().should("be.visible").click()
    this.inventoryItem.each(($el, index) => {
      cy.wrap($el)
        .find(".inventory_item_name")
        .then(($itemName) => {
          cy.wrap($itemName.text()).as(`itemName${index}`)
        })
      cy.wrap($el).find(".btn_primary").should("be.visible").click()
      cy.wrap($el).find(".btn_secondary").should("be.visible")
    })
    cy.cartBadge().should("be.visible")
    this.inventoryItem.then(($el) => {
      cy.cartBadge().should("have.text", $el.length.toString())
    })
  }

  public removeFromCart() {
    this.removeFromCartButton.first().should("be.visible").click()
    this.addToCartButton.first().should("be.visible")
    this.removeFromCartButton.should("not.exist")
    cy.cartBadge().should("not.exist")
  }

  public goToCart() {
    cy.goToCart()
  }

  public resetApp() {
    cy.clickMenu()
    this.resetAppButton.should("be.visible").click()
    cy.cartBadge().should("not.exist")
    this.removeFromCartButton.first().should("not.exist")
    cy.clickMenu()
  }
}

export const inventoryPage: InventoryPage = new InventoryPage()