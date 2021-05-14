/// <reference types="cypress" />

Cypress.Commands.add("enterText", (text, locator) => {
  cy.get(locator).type(text);
});

Cypress.Commands.add("performClick", (locator) => {
  cy.get(locator).click();
});
