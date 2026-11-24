pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t coderwanda-webapp:latest .'
            }
        }

        stage('Deploy with Docker') {
            steps {
                sh '''
                    docker rm -f coderwanda-container || true
                    docker run -d -p 3000:3000 --name coderwanda-container coderwanda-webapp:latest
                '''
            }
        }
    }
}
