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
        sh 'dnf install -y chromium xorg-x11-server-Xvfb'
        sh 'cypress run --headless'
      }
    }
  }
}