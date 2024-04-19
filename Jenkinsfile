pipeline {
    agent { dockerfile true }

    stages {
        stage('Build') {
            steps {
                sh 'node -v'
            }
        }
    }

    post {
        always {
            junit 'results/cypress-report.xml'
        }
    }
}