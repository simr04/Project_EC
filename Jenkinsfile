pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20.15.0-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    echo "📦 Installing dependencies..."
                    npm install

                    echo "⚙️ Building the React app..."
                    npm run build

                    echo "✅ Build completed successfully!"
                '''
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:20.15.0-alpine'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    echo "🧪 Running tests..."
                    npm test -- --watchAll=false

                    echo "✅ All tests passed!"
                '''
            }
        }
    }
}
