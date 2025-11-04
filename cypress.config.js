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
            API_TOKEN: process.env.API_TOKEN,
    },
  },
});