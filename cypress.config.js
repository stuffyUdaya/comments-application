const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://localhost:3000/SnapShot#/SnapScout/",
    chromeWebSecurity: false,
  },
});
