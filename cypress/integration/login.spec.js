describe("Login", () => {
  it("should fill in login form and successfully login", () => {
    cy.visit("/"); // visit the main page

    // Open the login modal
    cy.get('[data-auth="login"]').click();

    cy.get("#loginEmail").type("test@example.com");
    cy.get("#loginPassword").type("password123");
    cy.get("#loginForm").submit();

    // Wait for the modal to close and the URL to change
    cy.url().should("not.include", "/login");

    // Add any other assertions or checks you want to make after successful login
  });

  it("should show error message on unsuccessful login", () => {
    cy.visit("/"); // visit the main page

    // Open the login modal
    cy.get('[data-auth="login"]').click();

    cy.get("#loginEmail").type("example@stud.noroff.no");
    cy.get("#loginPassword").type("InvalidPwd");
    cy.get("#loginForm").submit();

    // Check for error message
    cy.get(".error-message").should("contain", "Unauthorized");
  });
});
