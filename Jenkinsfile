pipeline {
   agent any

   tools {nodejs "NodeJS"}

   stages {
       stage('e2e Tests') {
           steps {
               sh 'npx cypress run'
           }
       }
   }
}