class cartPage {
  elements = {
    checkoutBtn: () => cy.get('#checkout'),
    cartItemPriceList: () => cy.get('[data-test="inventory-item-price"]'),
    cartItemTitleList: () => cy.get('[data-test="inventory-item-name"]'),
    cartTitle: () => cy.get('[data-test="title"]')
  }

  clickOnCheckout() {
    this.elements.checkoutBtn().click();
  }

}

module.exports = new cartPage();