describe('Test radio button inputs', () => {
    beforeEach(() => {
        cy.AccessTheApplication()
    });

    it('Mark the type of care "Feedback"', () => {
        cy.get('input[type="radio"][value="feedback"]').check().should('have.value','feedback')
    });

    it('Marks all types of service', () => {
        cy.get('input[type="radio"]').should('have.length', 3).each(($radio) => {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    });
});