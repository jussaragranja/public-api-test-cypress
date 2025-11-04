const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://gorest.co.in/public/v2",
    setupNodeEvents(on, config) {
      allureCypress(on);
      return config;
    },
    env: {
      API_TOKEN: "06c2c09312699913ab233d46662002b78501bba311436de8bb52a3b420af741d",
    },
  },
});