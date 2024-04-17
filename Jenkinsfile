pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:20.9.0'
    }
  }

  stages {
    stage('build and test') {
      steps {
        sh 'export npm_config_cache=/path/to/cache'
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}