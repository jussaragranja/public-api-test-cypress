pipeline {
  agent {
        docker {
      image 'cypress/base:20.9.0'
        }
    }

  tools {nodejs "NodeJS"}

  stages {
    
    stage('Config') {
      steps {
        sh 'npm install cypress'
        sh 'npm ci'
        sh 'npm run cypress verify'
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