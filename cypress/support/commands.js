
/// <reference types="cypress" />

Cypress.Commands.add("searchText",textToBeSearched=>{

  cy.get('input[name=q]').type(textToBeSearched).type('{enter}');
  cy.get('div[id=result-stats').should('contain','results');
});