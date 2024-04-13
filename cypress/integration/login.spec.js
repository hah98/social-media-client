describe("Login", () => {
  it("should fill in login form and successfully login", () => {
    cy.visit("/");

    cy.get('[data-auth="login"]').first().should("be.visible").click();

    cy.get("#loginModal").should("exist");

    cy.get("#loginEmail").type("test@example.com");
    cy.get("#loginPassword").type("password123");
    cy.get("#loginForm").submit();

    // Wait for the modal to close and the URL to change
    cy.url().should("not.include", "/login");
  });
});
