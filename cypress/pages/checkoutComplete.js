class checkoutComplete {
  elements = {
    checkoutCompleteTitle: () => cy.get('[data-test="title"]'),
    completeheader: () => cy.get('[data-test="complete-header"]'),
    completeText: () => cy.get('[data-test="complete-text"]'),
  }

}

module.exports = new checkoutComplete();