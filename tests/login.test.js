import { login } from "../src/js/api/auth/login.js";

describe("Login Function", () => {
  it("should login successfully and save token", async () => {
    const profile = await login("test@example.com", "password123");
    expect(profile).toHaveProperty("accessToken");
    expect(profile).toHaveProperty("profile");
  });

  it("should throw error on unsuccessful login", async () => {
    await expect(
      login("wrong@example.com", "wrongpassword"),
    ).rejects.toThrowError();
  });
});
