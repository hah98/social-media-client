import { login } from "../src/js/api/auth/login.js";

describe("Login Function", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("should login successfully and save token", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ profile: { accessToken: "testToken", profile: {} } }),
    );

    const response = await login(
      process.env.LOGIN_EMAIL,
      process.env.LOGIN_PASSWORD
    );
    

    expect(response.profile).toHaveProperty("accessToken");
  });

  it("should throw error on unsuccessful login", async () => {
    await expect(
      login("wrong@example.com", "wrongpassword"),
    ).rejects.toThrowError();
  });
});
