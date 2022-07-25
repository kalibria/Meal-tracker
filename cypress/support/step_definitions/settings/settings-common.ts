import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I never used the application before', () => {
  localStorage.clear();
});

When('I go to app settings', () => {
  cy.get('.settings-open').click();
});

Then('I see Settings button on front page', () => {
  cy.get('.settings-open').should('exist');
});

Then('I see validation message saying {string}', (errorMsg: string) => {
  cy.contains(errorMsg).should('exist');
});
