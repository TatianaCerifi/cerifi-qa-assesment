type checkoutData = {
  firstName: string
  lastName: string
  zipCode: string,
  expected: string
}

class CheckoutPage {
  get firstNameInput() {
    return cy.get("#first-name")
  }

  get lastNameInput() {
    return cy.get("#last-name")
  }

  get postalCodeInput() {
    return cy.get("#postal-code")
  }

  get continueButton() {
    return cy.get("#continue")
  }

  get summaryInfo() {
    return cy.get(".summary_info")
  }

  get subtotalLabel() {
    return cy.get(".summary_subtotal_label")
  }

  get taxLabel() {
    return cy.get(".summary_tax_label")
  }

  get totalLabel() {
    return cy.get(".summary_total_label")
  }

  get finishButton() {
    return cy.get("#finish")
  }

  get completeMessage() {
    return cy.get(".complete-header")
  }

  public fillDataCheckout(checkoutData: checkoutData) {
    this.firstNameInput.type(checkoutData.firstName)
    this.lastNameInput.type(checkoutData.lastName)
    this.postalCodeInput.type(checkoutData.zipCode)
    this.continueButton.click()
  }

  public fillDataCheckoutWithEmptyFields(checkoutData: checkoutData) {
    this.lastNameInput.type(checkoutData.lastName)
    this.postalCodeInput.type(checkoutData.zipCode)
    this.continueButton.click()
    cy.errorMessageContainerIsVisible()
    cy.verifyErrorMessage(checkoutData.expected)
  }

  public verifySummaryInfo() {
    cy.get("@itemName0").then((itemName) => {
      cy.cartItemName().should("have.text", itemName)
    })
    this.summaryInfo.should("be.visible")
    this.subtotalLabel.should("be.visible")
    this.taxLabel.should("be.visible")
    this.totalLabel.should("be.visible")
  }

  public finishPurchase() {
    this.finishButton.should("be.visible").click()
    this.completeMessage.should("be.visible")
    this.completeMessage.should("have.text", "Thank you for your order!")
  }
}

export const checkoutPage: CheckoutPage = new CheckoutPage()