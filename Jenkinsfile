pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:20.9.0'
    }
  }
  environment {
    npm_config_cache = 'npm-cache'
  }

  stages {
    stage('build and test') {
      steps {
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}