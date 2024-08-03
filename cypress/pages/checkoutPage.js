/// <reference types="Cypress" />
import { checkoutElements } from '../elements/checkoutElements'; 

class CheckoutPage {
    fillFirsName(username) {
        cy.get(checkoutElements.firstName).type(username);
    }
    fillLastName(lastName) {
        cy.get(checkoutElements.lastName).type(lastName);
    }
    fillPostalCode(postalCode) {
        cy.get(checkoutElements.postalCode).type(postalCode);
    }
    submit() {
        cy.get(checkoutElements.continueButton).click();
    }

    setUserInformation() {
        this.fillFirsName("automationFirstName");
        this.fillLastName("automationLastName");
        this.fillPostalCode("automationPostalCode");
        this.submit();
    }
}
export default CheckoutPage;
