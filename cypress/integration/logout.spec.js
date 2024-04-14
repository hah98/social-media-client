describe("Logout Functionality", () => {
  it("should not show the profile name after logout", () => {
    // Wait for the logout button to be visible and then click
    cy.get('[data-auth="logout"]').should("be.visible").click();

    // Check if the profile name is not visible
    cy.contains('[data-auth="profileName"]', "Your Profile Name").should(
      "not.exist",
    );
  });
});
