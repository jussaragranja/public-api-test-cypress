def label = "worker-${UUID.randomUUID().toString()}"

podTemplate(label: label, containers: [
  containerTemplate(name: 'cypress', image: 'cypress/included:3.2.0', ttyEnabled: true, command: 'cat'),
],
volumes: [
  hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock'),
]) {
  node(label) {
    container('cypress') {
      stage('Test e2e') {
        checkout scm
        ansiColor('xterm') {
          sh """
            cd cypress/e2e && cypress run
          """
        }
      }
    }
  }
}




/*pipeline {
  agent any 
  stages {
    stage('E2E Tests') {
      steps {
        sh 'docker run -v $PWD -w /e2e cypress/included:10.0.0'
      }
    }
  }
}*/

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