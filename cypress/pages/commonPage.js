class CommonPage {
    getLocation() {
        return cy.location('pathname');
    }
}

export default CommonPage;