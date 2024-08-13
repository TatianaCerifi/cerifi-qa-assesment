class checkoutStepTwo {
  elements = {
    checkoutStepTwoTitle: () => cy.get('[data-test="title"]'),
    itemQuantityList: () => cy.get('[data-test="item-quantity"]'),
    itemPriceList: () => cy.get('[data-test="inventory-item-price"]'),
    paymentInfoLabel: () => cy.get('[data-test="payment-info-label"]'),
    paymentInfoValue: () => cy.get('[data-test="payment-info-value"]'),
    shippingInfoLabel: () => cy.get('[data-test="shipping-info-label"]'),
    shippingInfoValue: () => cy.get('[data-test="shipping-info-value"]'),
    totalInfoLabel: () => cy.get('[data-test="total-info-label"]'),
    subtotalLabel: () => cy.get('[data-test="subtotal-label"]'),
    taxLabel: () => cy.get('[data-test="tax-label"]'),
    totalLabel: () => cy.get('[data-test="total-label"]'),
    finishBtn: () => cy.get('#finish')
  }

  clickOnFinish() {
    this.elements.finishBtn().click();
  }

}

module.exports = new checkoutStepTwo();