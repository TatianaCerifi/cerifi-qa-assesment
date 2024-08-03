/// <reference types="Cypress" />
import { orderFinishedElements } from '../elements/orderFinishedElements';

class orderFinishedPage {
    getThankYouMessage() {
        return cy.get(orderFinishedElements.thankYouMessage);
    }

    getThankYouInformationMessage() {
        return cy.get(orderFinishedElements.thankYouInformationMessage);
    }

    getBackToHomeButton() {
        return cy.get(orderFinishedElements.backToHome);
    }

    gotBackToHome() {
        this.getBackToHomeButton().click();
    }
}
export default orderFinishedPage;
