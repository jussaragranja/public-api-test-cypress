pipeline {
  agent any

  tools {nodejs "NodeJS"}

  stages {
    stage('Config') {
      steps {
        sh 'npm install cypress'
        sh 'npm ci'
      }
    }
    stage('e2e Tests') {
      steps {
        sh 'cypress run --browser chrome --headless'
      }
    }
  }
}