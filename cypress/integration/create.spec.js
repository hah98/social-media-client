describe("Create Post", () => {
  it("should create a new post", () => {
    cy.visit("/");

    // Click on the New Post button
    cy.contains("New Post").click();

    // Wait for the post form to load or the URL to change
    cy.url()
      .should("include", "/?view=post")
      .then(() => {
        // Check if the post form elements are visible
        cy.get("#postTitle").should("be.visible");

        // Fill out the post form
        cy.get("#postTitle").type("Test Post Title");
        cy.get("#postTags").type("test, cypress, automation");
        cy.get("#postMedia").type("https://example.com/image.jpg");
        cy.get("#postBody").type("This is a test post created by Cypress.");

        // Submit the form to create the post
        cy.get('[data-action="submit"]').click();

        // Wait for the redirection or navigation to complete
        cy.url().should("not.include", "/?view=post");

        cy.url().should("include", "/?view=profile");
      });
  });
});
