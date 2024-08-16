class ProductPage {
  get productImage() {
    return cy.get(".inventory_details_img_container")
  }

  get productName() {
    return cy.get(".inventory_details_name")
  }

  get productDescription() {
    return cy.get(".inventory_details_desc")
  }

  get productPrice() {
    return cy.get(".inventory_details_price")
  }

  get addToCartButton() {
    return cy.get(".btn_primary")
  }

  get removeCartButton() {
    return cy.get(".btn_secondary")
  }

  verifyProductDetails() {
    this.productImage.should("be.visible")
    cy.get("@itemName0").then((itemName) => {
      this.productName.should("have.text", itemName)
    })
    this.productDescription.should("be.visible")
    this.productPrice.should("be.visible")
    this.addToCartButton.should("be.visible")
  }

  public addToCart() {
    this.addToCartButton.should("be.visible").click()
    this.removeCartButton.should("be.visible")
    cy.cartBadge().should("be.visible")
    cy.cartBadge().should("have.text", "1")
  }
}

export const productPage: ProductPage = new ProductPage()