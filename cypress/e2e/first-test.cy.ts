describe('First test', () => {
  it('should find a settings button', () => {
    cy.visit('/');
    cy.get('.settings-open').should('exist');
  });
});

export {};
