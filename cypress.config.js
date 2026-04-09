const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      // Add plugins and event listeners here when needed.
      return config;
    }
  }
});
