pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh '''
                    echo "📦 Installing dependencies..."
                    npm install

                    echo "⚙️ Building the React app..."
                    npm run build

                    echo "✅ Build completed!"
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    echo "🧪 Running tests..."
                    npm test -- --watchAll=false

                    echo "✅ Tests passed!"
                '''
            }
        }
    }
}
