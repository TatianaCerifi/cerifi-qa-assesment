const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(cypressOn, config) {
    },
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false
  },
});
