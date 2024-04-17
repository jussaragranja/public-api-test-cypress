pipeline {
    agent any

    tools {nodejs "NodeJS"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
                sh 'npm install cypress --save-dev'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
