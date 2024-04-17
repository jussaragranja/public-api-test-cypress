pipeline {
  agent {
        docker {
      image 'cypress/base:20.9.0'
        }
    }

  tools {nodejs "NodeJS"}

  stages {
    stage('e2e Tests') {
      steps {
        sh 'cypress run'
      }
    }

  }
}