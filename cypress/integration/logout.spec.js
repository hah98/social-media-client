describe("Logout Functionality", () => {
  // Run the login functionality before each test
  beforeEach(() => {
    // Navigate to the page and trigger login actions here
    cy.visit("/");

    cy.get('[data-auth="login"]').first().should("be.visible").click();
    cy.get("#loginModal").should("exist");

    cy.get("#loginEmail").type(Cypress.env("LOGIN_EMAIL"));
    cy.get("#loginPassword").type(Cypress.env("LOGIN_PASSWORD"));
    cy.get("#loginForm").submit();

    // Ensure login was successful
    cy.window().its('localStorage.token').should('exist');
    cy.url().should("not.include", "/login");
  });

  it("should not show the profile name after logout", () => {
    // Click on the logout button
    cy.get('[data-auth="logout"]').should("be.visible").click();

    // Check that the profile name is not visible anymore
    cy.contains('[data-auth="profileName"]', "Your Profile Name").should(
      "not.exist"
    );
  });
});
