describe('Settings', () => {
  it('should set hours to 2 and minutes to 00', () => {
    const openSettingsBtn = '.settings-open';

    // todo UI is not ready for this test to pass
    cy.visit('/');
    cy.get(openSettingsBtn).click();
    cy.get('#setting-interval-meals-hrs').click();
    cy.get(
      'ul[aria-labelledby="setting-interval-meals-hrs"] > li:nth-child(2)'
    ).click();

    cy.get('#setting-interval-meals-min').click();
    cy.get(
      'ul[aria-labelledby="setting-interval-meals-min"] > li:nth-child(1)'
    ).click();
    cy.get('.settings-save').click();
    // re-open settings, ensure the value got saved
    cy.get(openSettingsBtn).click();
    cy.get('#setting-interval-meals-hrs').should('have.text', '2');
    cy.get('#setting-interval-meals-min').should('have.text', '00');
  });
});

export {};
