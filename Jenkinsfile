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
        sh 'npm run cypress:ci'
      }
    }
  }
}