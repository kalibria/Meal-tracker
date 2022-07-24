import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';

Given('I never used the application before', () => {
  localStorage.clear();
});

When('I visit the application', () => {
  cy.visit('/');
});

Then('I see Settings button', () => {
  cy.get('.settings-open').should('exist');
});
