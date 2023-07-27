describe('Test negative path of required fields', () => {
    const THREE_SECS_IN_MS = 3000

    beforeEach(() => {
        cy.AccessTheApplication()
    });

    it('Displays error message when submitting the form with an email with invalid formatting', () => {
        cy.clock()

        cy.get('#firstName').should('be.visible').type('Caroline').should('have.value','Caroline')
        cy.get('#lastName').should('be.visible').type('Vilar').should('have.value','Vilar')
        cy.get('#email').should('be.visible').type('testeteste.com').should('have.value','testeteste.com')
        cy.get('#open-text-area').should('be.visible').type('Teste').should('have.value','Teste')

        cy.contains('button','Enviar').click()

        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECS_IN_MS)
        cy.get('.error').should('not.be.visible')
    });

    it('Displays error message when the phone number becomes mandatory but is not filled in before sending the form', () => {
        cy.clock()
        
        cy.get('#firstName').should('be.visible').type('Caroline').should('have.value','Caroline')
        cy.get('#lastName').should('be.visible').type('Vilar').should('have.value','Vilar')
        cy.get('#email').should('be.visible').type('teste@teste.com').should('have.value','teste@teste.com')
        cy.get('#phone-checkbox').check().should('be.checked')
        cy.get('#open-text-area').should('be.visible').type('Teste').should('have.value','Teste')

        cy.contains('button','Enviar').click()

        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECS_IN_MS)
        cy.get('.error').should('not.be.visible')
    });

    it('Displays error message when submitting the form without filling in the required fields', () => {
        cy.clock()
        
        cy.contains('button','Enviar').click()

        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECS_IN_MS)
        cy.get('.error').should('not.be.visible')
    });
});