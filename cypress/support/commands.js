/// cypress/support/commands.js
Cypress.Commands.add("login", () => {
    cy.visit("/");  // Visit the homepage
    
    cy.get('[data-auth="login"]').first().should("be.visible").click(); // Open login modal
    cy.get("#loginModal").should("exist"); // Ensure the login modal is present
    
    // Use the environment variables for email and password
    cy.get("#loginEmail").type(Cypress.env("LOGIN_EMAIL"));
    cy.get("#loginPassword").type(Cypress.env("LOGIN_PASSWORD"));
    cy.get("#loginForm").submit(); // Submit the login form
    
    // Ensure login is successful
    cy.window().its("localStorage.token").should("exist"); // Check for the token in localStorage
    cy.url().should("not.include", "/login");  // Ensure we're redirected away from login page
  });
  
  
///

/* First test: HomePage  */

Cypress.Commands.add("showHome", () => {
    cy.visit("/");
    cy.wait(500);
  
  });
  
  /* Second test: Go to login form */
  
  Cypress.Commands.add("showLoginForm", () => {
    cy.get("#registerForm").find("button[data-auth=login]").click();
    cy.get("#loginForm").should("be.visible");
    cy.wait(500);
  
  });
  
  /* Third test: Fill out and login with loginForm */
  
  Cypress.Commands.add("loginForm", (email, password) => {
    cy.get("#loginForm").find("input[name=email]").type(Cypress.env("LOGIN_EMAIL"));  // Correctly using environment variable
    cy.get("#loginForm").find("input[name=password]").type(Cypress.env("LOGIN_PASSWORD"));
    cy.get("#loginForm").find("button[type=submit]").click();
    cy.wait(500);
  });
  
  
  
  /* Fourth test: Testing Log in user */
  Cypress.Commands.add("loginUser", () => { /// loginwithtestuser
    cy.fixture("example").then((user) => {
      cy.loginForm(user.email, Cypress.env("LOGIN_PASSWORD"));
    });
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
