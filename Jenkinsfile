pipeline {
  agent {
        docker {
            image 'cypress/base:12.16.1' 
            args '-p 3000:3000' 
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