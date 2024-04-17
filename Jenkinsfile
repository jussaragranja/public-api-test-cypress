pipeline {
  agent any

  tools {nodejs "NodeJS"}

  stages {
    
    stage('Config') {
      steps {
        sh 'npm install cypress'
        sh 'npm ci'
        sh 'cypress verify'
      }
    }
    
    stage('Build') { 
      steps {
        sh 'npm run build'
      }
    }
    
    stage('e2e Tests') {
      steps {
        sh 'cypress run'
      }
    }

  }
}