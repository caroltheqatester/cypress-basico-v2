describe('Test positive path of required fields', () => {
  const THREE_SECS_IN_MS = 3000
  beforeEach(() => {
    cy.AccessTheApplication()
  });

  it('Fill in the required fields and submit the form', () => {
    cy.clock()

    cy.fillMandatoryFields()
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
    cy.tick(THREE_SECS_IN_MS)
    cy.get('.success').should('not.be.visible')
  });

  it.only('Fills in and clears the first name, last name, email and phone fields', () => {
    cy.get('#firstName').should('be.visible').type('Caroline').should('have.value', 'Caroline').clear().should('have.value','')
    cy.get('#lastName').should('be.visible').type('Vilar').should('have.value', 'Vilar').clear().should('have.value','')
    cy.get('#email').should('be.visible').type('teste@teste.com').should('have.value', 'teste@teste.com').clear().should('have.value','')
    cy.get('#phone').type('12345678').clear().should('have.value','')
  });

  it('Phone field remains empty when filled with non-numeric value', () => {
    cy.get('#phone').type('abcdef').should('have.value', '')
  });
});