pipeline {
    agent {
        label '{functional_node}'
    }
        stages {
            stage('TEST') {
                agent {
                        docker {
                            image 'cypress/base:20.9.0'
                        }
                }
                steps{
                    git branch: 'development',
                    credentialsId: '{redacted}',
                    url: '{URL}'

                    sh 'ng serve'
                    sh 'npm i'
                    sh 'npm run cypress:run'
                }

            }
        }
}