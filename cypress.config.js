const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 5000,
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
    },
  },
});
