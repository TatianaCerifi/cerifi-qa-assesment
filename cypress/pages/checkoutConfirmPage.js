class checkoutConfirmationPage{
    elements = {
        productPrice : () => cy.get('[data-test="inventory-item-price"]'),
        subtotalLabel : () => cy.get('[data-test="subtotal-label"]'),
        finishButton : () => cy.get('[data-test="subtotal-label"]'),
    }
    validateProductPrice(){
        this.elements.productPrice().should('be.visible').should('exist').invoke('text')
            .then(tempvalue =>{
                expect(tempvalue).to.equal(Cypress.env('itemPrice'))
            });
        this.elements.subtotalLabel().should('be.visible').should('exist').invoke('text')
            .then(tempvalue =>{
                expect(tempvalue.split(' ')[2]).to.equal(Cypress.env('itemPrice'))
            });
    }
    
    typeLastName(lastName){
        this.elements.lastNameField().should('be.visible').type(lastName);
    }
    typePostalCode(postalCode){
        this.elements.postalCodeField().should('be.visible').type(postalCode);
    }
}

export default checkoutConfirmationPage;