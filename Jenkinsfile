pipeline {
    agent any
    environment{
        sohail = "this is for main branch"
        pathan = "this is for main branch"
    }
    stages {
        stage('first') {
            steps {
                echo "stage one for ${sohail}"
            }
        }
    
        stage('secound') {
            steps {
                echo 'Hello World'
            }
        }
        stage('third') {
            steps {
                echo 'Hello World'
            }
        }
        stage('fourth') {
            steps {
                echo 'Hello World'
            }
        }
        stage('five') {
            steps {
                echo 'Hello World'
            }
        }

        stage('six') {
            steps {
                echo 'Hello World'
            }
        }
    }
    post {
        always {
            echo "this is ${pathan}"
        }
    }
}
