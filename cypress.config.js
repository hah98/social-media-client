/* const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
 */

// cypress.config.js
const { defineConfig } = require("cypress");
require("dotenv").config(); // Load environment variables from the .env file

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // You can now access environment variables from the .env file
      config.env.LOGIN_EMAIL = process.env.LOGIN_EMAIL;
      config.env.LOGIN_PASSWORD = process.env.LOGIN_PASSWORD;
      return config;
    },
  },
});