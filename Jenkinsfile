pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/included:12.12.0'
    }
  }

  stages {
    stage('build and test') {
      steps {
        //sh 'npm ci'
        //sh "npm run test:ci:record"
        sh "cypress run"
      }
    }
  }
}