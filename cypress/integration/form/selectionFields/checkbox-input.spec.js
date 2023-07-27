describe('Tests the checkbox elements', () => {
    beforeEach(() => {
        cy.AccessTheApplication()
    });

    it('Check both checkboxes, then uncheck the last one', () => {
        cy.get('input[type="checkbox"]').check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked')
    });
});