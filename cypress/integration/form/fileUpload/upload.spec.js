describe('Tests file uploads', () => {
    beforeEach(() => {
      cy.AccessTheApplication()
    });

    it('Select a file from the fixtures folder', () => {
        cy.get('input[type="file"]#file-upload')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json')
          .should(($input) => {
            expect($input[0].files[0].name).to.be.equal('example.json')
        })
    });

    it('Selects a file simulating a drag-and-drop', () => {
        cy.get('input[type="file"]#file-upload')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json',{action:'drag-drop'})
          .should(($input) => {
            expect($input[0].files[0].name).to.be.equal('example.json')
        })
    });

    it('Selects a file using a fixture for which an alias has been given', () => {
        cy.fixture('example.json').as('file')
        cy.get('input[type="file"]').selectFile('@file')
          .should(($input) => {
            expect($input[0].files[0].name).to.be.equal('example.json')
          })
    });
});