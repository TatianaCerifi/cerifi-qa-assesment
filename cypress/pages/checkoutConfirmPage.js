class checkoutConfirmationPage{
    elements = {
        productPrice : () => cy.get('[data-test="inventory-item-price"]'),
        subtotalLabel : () => cy.get('[data-test="subtotal-label"]'),
        finishButton : () => cy.get('[data-test="subtotal-label"]'),
    }
    validateProductPrice(){
        cy.get('@Price').then((value) => {
            this.elements.productPrice().should('equal',value);
            this.elements.subtotalLabel().should('equal',value);
        })
    }
    
    typeLastName(lastName){
        this.elements.lastNameField().should('be.visible').type(lastName);
    }
    typePostalCode(postalCode){
        this.elements.postalCodeField().should('be.visible').type(postalCode);
    }
}

export default checkoutConfirmationPage;