import { logout } from "../src/js/api/auth/logout.js";
import "../setupTest.js"; 

describe("Logout Functionality", () => {
  beforeEach(() => {
    global.localStorage.removeItem = jest.fn();
  });

  it("should remove user session from browser storage", () => {
    logout();

    expect(global.localStorage.removeItem).toHaveBeenCalledTimes(2);
    expect(global.localStorage.removeItem).toHaveBeenCalledWith("token");
    expect(global.localStorage.removeItem).toHaveBeenCalledWith("profile");
  });
});
