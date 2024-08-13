class inventoryPage {
  elements = {
    inventoryItemTitleList: () => cy.get('[data-test="inventory-item-name"]'),
    inventoryItemPriceList: () => cy.get('[data-test="inventory-item-price"]'),
    inventoryItemImgList: () => cy.get('img.inventory_item_img'),
    inventoryTitle: () => cy.get('[data-test="title"]'),
    inventoryShoppingCartBtn: () => cy.get('[data-test="shopping-cart-link"]'),
    inventoryShoppingCartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),
    inventorySortDropDown: () => cy.get('[data-test="product-sort-container"]'),
    addToCartBtnBackPack: () => cy.get('#add-to-cart-sauce-labs-backpack'),
    addToCartBtnBikeLight: () => cy.get('#add-to-cart-sauce-labs-bike-light'),
    addToCartBtnBoltTShirt: () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt'),
    addToCartBtnFleeceJacket: () => cy.get('#add-to-cart-sauce-labs-fleece-jacket'),
    addToCartBtnOnesie: () => cy.get('#add-to-cart-sauce-labs-onesie'),
    addToCartBtnAlltheThingsTShirtRed: () => cy.get('#' + Cypress.$.escapeSelector('add-to-cart-test.allthethings()-t-shirt-(red)'))
  }

  addThreeItemsToTheCart() {
    this.elements.addToCartBtnBackPack().click();
    this.elements.addToCartBtnBikeLight().click();
    this.elements.addToCartBtnAlltheThingsTShirtRed().click();
  }

  clickOnShoppingCart() {
    this.elements.inventoryShoppingCartBtn().click();
  }

}

module.exports = new inventoryPage();