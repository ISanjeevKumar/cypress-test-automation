/// <reference types="Cypress" />

describe("Login Tests",function (){

    it('User should login with valid credentials', function () {
      cy.fixture('../fixtures/users').then((user)=>{
          cy.visit("http://localhost:3000/")
          cy.get('.close-dialog > .mat-button-wrapper > span').click()
          cy.get('button#navbarAccount').click()
          cy.get('button#navbarLoginButton').click()
          cy.get('#email').type(user.username)
          cy.get('#password').type(user.password)
          cy.get('#loginButton').click()
      })
    });
})