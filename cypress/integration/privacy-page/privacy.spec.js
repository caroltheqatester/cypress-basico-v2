describe('Tests the Privacy terms page', () => {
    beforeEach(() => {
        cy.AccessTheApplication()
    });
    
    it('Verifies that the privacy policy opens in another tab without the need for a click', () => {
        cy.get('#privacy a').should('have.attr','target','_blank')
    });
    
    it('Independently test the privacy policy page', () => {
        cy.get('#privacy a').invoke('removeAttr','target').click()
        cy.contains('Talking About Testing').should('be.visible')
    });

    it('Access the Privacy page via the link', () => {
        cy.visit('../../src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')
    });
});