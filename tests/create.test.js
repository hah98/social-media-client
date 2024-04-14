import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { createPost } from "/src/js/api/posts/create.js";

jest.mock("../src/js/api/posts/create.js"); // Mock the createPost function

describe("Create Post", () => {
  it("should create a new post", async () => {
    // Find and click the New Post button
    const newPostButton = screen.getByText("New Post");
    userEvent.click(newPostButton);

    // Wait for the post form to load or the URL to change
    await waitFor(() => expect(window.location.href).toContain("/?view=post"));

    // Check if the post form elements are visible
    const postTitleInput = screen.getByPlaceholderText("Post Title");
    expect(postTitleInput).toBeInTheDocument();

    // Fill out the post form
    userEvent.type(postTitleInput, "Test Post Title");
    const postTagsInput = screen.getByPlaceholderText("Post Tags");
    userEvent.type(postTagsInput, "test, cypress, automation");
    const postMediaInput = screen.getByPlaceholderText("Post Media");
    userEvent.type(postMediaInput, "https://example.com/image.jpg");
    const postBodyTextarea = screen.getByLabelText("Post Body");
    userEvent.type(postBodyTextarea, "This is a test post created by Jest.");

    createPost.mockResolvedValueOnce({ ok: true });

    // Find and click the Submit button
    const submitButton = screen.getByText("Publish");
    userEvent.click(submitButton);

    // Wait for the redirection or navigation to complete
    await waitFor(() =>
      expect(window.location.href).not.toContain("/?view=post"),
    );

    expect(window.location.href).toContain("/?view=profile");
  });
});
