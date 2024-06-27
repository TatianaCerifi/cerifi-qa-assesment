const { defineConfig } = require("cypress");

module.exports = defineConfig({
  'cypress-cucumber-preprocessor': {
    nonGlobalStepDefinitions: false,
    step_definitions: './cypress/e2e/step_definitions/**',
  },
  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 42000,
  pageLoadTimeout: 300000,
  responseTimeout: 60000,
  requestTimeout: 405700,
  chromeWebSecurity: false,
  env:{
    itemPrice:''
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    defaultCommandTimeout: 10000
  },
});
