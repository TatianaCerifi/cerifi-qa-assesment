const checkoutPage = require('../page-objects/CheckoutPage')

class CheckoutSteps {

    getCheckoutTitle() {
        return checkoutPage.checkoutTitle
    }

    fillsCheckout(firstName: string, lastName: string, zipCode: string) {
        checkoutPage.fillFirstNameField(firstName)
        checkoutPage.fillLastNameField(lastName)
        checkoutPage.fillZipField(zipCode)
        checkoutPage.clickOnContinueButton()
    }

    clickOnFinishButton() {
        checkoutPage.clickOnFinishButton()
    }

    getCheckoutMessage() {
        return checkoutPage.checkoutMessage
    }

}

module.exports = new CheckoutSteps()