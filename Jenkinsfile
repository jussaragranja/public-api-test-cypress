pipeline {
  agent any

  tools {nodejs "NodeJS"}

  stages {
    stage('Config') {
      steps {
        sh 'npm install cypress'
        sh 'npm ci'
        sh 'npm run cy:verify'

      }
    }
    stage('e2e Tests') {
      steps {
        sh 'cypress run:cy'
      }
    }
  }
}