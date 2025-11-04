<h1 align="center">Welcome to public-api-cypress 👋</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://gorest.co.in/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
    <img alt="GitHub Actions" src="https://github.com/jussaragranja/public-api-test-cypress/actions/workflows/cypressrun.yml/badge.svg" />
</p>

> Test automation project using Cypress for the Public API GoRest.


### 🏠 [PUBLIC-API Gorest](https://gorest.co.in/)

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (recommended: LTS version)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/) (installed via npm)

---

## 🚀 Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/jussaragranja/public-api-test-cypress.git
cd public-api-test-cypress
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up your API Access Token
To run the tests, you need an access token from the GoRest API.

Create a .env file in the root directory with the following content:

```sh
API_TOKEN=your_token_here
```

***Never share your token in public repositories!***

### Running the Tests

#### Headless mode (terminal)

```sh
npx cypress run
```
#### Interactive mode (GUI)

```sh
npx cypress open
```

## 📊 Allure Reports

After running the tests, an Allure report is automatically generated. The report is also published to GitHub Pages after each workflow run.

To view locally:

 - Install Allure CLI (official guide)
 - Run:

```sh
allure serve allure-results
```

## ⚙️ Continuous Integration

<img alt="GitHub Actions" src="https://github.com/jussaragranja/public-api-test-cypress/actions/workflows/cypressrun.yml/badge.svg" />

This project uses GitHub Actions to automatically run tests on every push. The workflow executes Cypress tests, generates the Allure report, and publishes it to GitHub Pages.

## 📚 Documentation

- [Cypress - Official Documentation](https://docs.cypress.io/app/get-started/why-cypress)
- [Allure Reports](https://allurereport.org/docs/)

## 💡 Tips for Beginners

```
Tests are organized by feature in the cypress/e2e folder.
Custom commands are in cypress/support/commands.js.
Test data is stored in cypress/fixtures.
Always keep your token secure and never commit it.
For questions, check the official Cypress documentation or open an issue in this repository.
**Note:** - Replace `SEU_USUARIO` and `SEU_REPOSITORIO` with your actual GitHub username and repository name for the badge to work. - If your workflow file is not named `cypressrun.yml`, adjust the badge path accordingly. 
```

## Author

👤 **Jussara Granja**

* LinkedIn: [@jussaragranja](https://linkedin.com/in/jussaragranja)
* Github: [@jussaragranja](https://github.com/jussaragranja)
* GitLab: [@jussaragranja](https://gitlab.com/jussaragranja)