class checkoutStepOne {
  elements = {
    firstNameInput: () => cy.get('#first-name'),
    lastNameInput: () => cy.get('#last-name'),
    postalCodeInput: () => cy.get('#postal-code'),
    checkoutStepOneTitle: () => cy.get('[data-test="title"]'),
    continueBtn: () => cy.get('#continue')
  }

  typeFirstName(firstName) {
    this.elements.firstNameInput().type(firstName);
  }

  typeLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }

  typePostalCode(postalCode) {
    this.elements.postalCodeInput().type(postalCode);
  }
  
  clickOnContinue() {
    this.elements.continueBtn().click();
  }

}

module.exports = new checkoutStepOne();