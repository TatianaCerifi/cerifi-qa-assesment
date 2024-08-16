import { defineConfig } from "cypress"

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "./cypress/reports",
    reportFilename: "cypress-report",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on)
      require('@cypress/grep/src/plugin')(config)
    },
  },
})
