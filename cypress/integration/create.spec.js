describe("Create Post", () => { 
  beforeEach(() => {
    cy.login(); // Log in before every test
    cy.visit("?view=post"); // Navigate directly to the create post page
  });

  it("should allow the user to create a post", () => {
    // Verify the user is on the create post page
    cy.url().should("include", "?view=post");

    // Fill in the necessary details for creating a post
    cy.get("#postTitle").type("My First Post");
    cy.get("#postContent").type("This is the content of my first post.");

    // Submit the post
    cy.get("#createPostForm").submit();

    // Validate that the post was created successfully
    cy.get(".alert-success").should("contain", "Post created successfully!");
  });
});
