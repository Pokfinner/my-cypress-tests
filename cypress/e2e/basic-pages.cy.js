describe('basic tests for classes', () => {
  it('custom page tests', () => {


    // Verificar se o título é igual a Document
    cy.visit('http://127.0.0.1:5500/main.html')

    cy.title().should('be.equal', 'Document')
    cy.get('main').should('contain', 'Carlos')
    cy.get('.carlos').should('contain', 'Carlos')
    cy.get('#nome').should('contain.value', 'Diogo')

    // Aceder à vossa página e verificar se o VALUE do input é Diogo (ou o vosso nome)

  })
})