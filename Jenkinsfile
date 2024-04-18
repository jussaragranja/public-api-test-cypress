pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
  }
  stages {
    stage('E2E Tests') {
      dir("cypress-e2e-tests") {
    lock("cypress-e2e-tests-${env.NODE_NAME}") {
      sh 'docker run -v $PWD:/e2e -w /e2e cypress/included:3.4.0'
    }
  }
    }
  }
}


/*pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/included:12.12.0'
    }
  }

  stages {
    stage('E2E Tests') {
      steps {
        sh 'docker run -v $PWD:/e2e -w /e2e cypress/included:3.4.0'
      }
    }
  }
}*/