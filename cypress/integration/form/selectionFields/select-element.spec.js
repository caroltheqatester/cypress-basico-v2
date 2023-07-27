describe('Tests the select elements', () => {
    beforeEach(() => {
        cy.AccessTheApplication()
    });

    it('Select a product (YouTube) by its text', () => {
        cy.get('select').select('YouTube').should('have.value', 'youtube')
    });

    it('Selects a product (Mentoring) by its value', () => {
        cy.get('select').select('mentoria').should('have.value', 'mentoria')
    });

    it('Selects a product (Blog) by its index', () => {
        cy.get('select').select(1).should('have.value', 'blog')
    });

    it('Select a product (Cursos) by its text', () => {
        cy.get('select').select('Cursos').should('have.value', 'cursos')
    });
});