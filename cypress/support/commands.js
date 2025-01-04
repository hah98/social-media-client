/// cypress/support/commands.js
Cypress.Commands.add("login", () => {
    cy.visit("/");
  
    cy.get('[data-auth="login"]').first().should("be.visible").click();
    cy.get("#loginModal").should("exist");
  
    cy.get("#loginEmail").type(Cypress.env("LOGIN_EMAIL"));
    cy.get("#loginPassword").type(Cypress.env("LOGIN_PASSWORD"));
    cy.get("#loginForm").submit();
  
    // Ensure login is successful
    cy.window().its("localStorage.token").should("exist");
    cy.url().should("not.include", "/login");
  });
  

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
