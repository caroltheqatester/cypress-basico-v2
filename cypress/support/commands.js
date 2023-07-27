Cypress.Commands.add('AccessTheApplication', () => {
    cy.visit('../../src/index.html')
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
})

Cypress.Commands.add('fillMandatoryFields', () => {
    const message = Cypress._.repeat('Minha mensagem ', 20)

    cy.get('#firstName').should('be.visible').type('Tester').should('have.value', 'Tester')
    cy.get('#lastName').should('be.visible').type('Testing').should('have.value', 'Testing')
    cy.get('#email').should('be.visible').type('teste@teste.com').should('have.value', 'teste@teste.com')
    cy.get('#phone').should('be.visible').type('12345678').should('have.value', '12345678')
    cy.get('#open-text-area').invoke('val', message).should('have.value', message)
})