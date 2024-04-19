pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
                sh 'Xvfb -screen 0 1024x768x24 :99 &'
                sh 'export DISPLAY=:99'
            }
        }
        stage('Build') {
            steps {
                sh 'node -v'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npm run cypress:ci'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'pkill Xvfb'
            }
        }
    }

    post {
        always {
            junit 'results/cypress-report.xml'
        }
    }
}