pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "meghaamanickam/devops-cicd-app"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-cred', url: '']) {
                    sh 'docker push $DOCKER_IMAGE'
                }
            }
        }

    }
}
