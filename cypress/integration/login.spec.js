/// login.spec.js

console.log("Login Email:", Cypress.env("LOGIN_EMAIL"));
console.log("Login Password:", Cypress.env("LOGIN_PASSWORD"));

describe("Login", () => {
  it("should fill in login form and successfully login", () => {
    cy.visit("/");

    cy.get("#registerModal").should("be.visible").within(() => {
      cy.get("button.btn.btn-outline-success").contains("Login").click();
    });

    cy.get("#loginModal").should("exist");

    const loginEmail = Cypress.env("LOGIN_EMAIL") ;
    const loginPassword = Cypress.env("LOGIN_PASSWORD") ;

    cy.get("#loginEmail")
    .clear()
    .should("be.visable")
    .type(loginEmail);

    cy.get("#loginPassword")
    .clear()
    .should("be.visable")
    .type(loginPassword);

    cy.get("#loginForm").submit();

    // Verify login success (check localStorage or redirection)
    cy.window().its("localStorage.token").should("exist");
    cy.url().should("not.include", "/login");
  });
});
