pipeline {
  agent any

  tools {nodejs "NodeJS"}

  stages {
    stage('Config') {
      steps {
        sh 'npm install cypress'
      }
    }
    stage('e2e Tests') {
      steps {
        sh 'npx cypress run --record --spec "cypress/e2e/user-spec.cy.js"'
      }
    }
  }
}