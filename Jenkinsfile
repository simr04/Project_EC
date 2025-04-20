pipeline {
    agent {
        docker {
            image 'node:20.15.0-alpine'
            reuseNode true
        }
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                    npm install
                    npm run build
                '''
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
    }
}
