pipeline {
agent any

environment {
    DOCKER_IMAGE = "meghaamanickam/devops-cicd-app"
    DOCKER_TAG = "latest"
}

stages {

    stage('Clone Repository') {
        steps {
            git branch: 'main',
            url: 'https://github.com/MEGHAAMANICKAM/end-to-end-devops-cicd-pipeline.git'
        }
    }

    stage('Build Docker Image') {
        steps {
            bat 'docker build -t %DOCKER_IMAGE%:%DOCKER_TAG% .'
        }
    }

    stage('Push to Docker Hub') {
        steps {
            withCredentials([usernamePassword(
                credentialsId: 'dockerhub-creds',
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS'
            )]) {

                bat '''
                echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                docker push %DOCKER_IMAGE%:%DOCKER_TAG%
                '''
            }
        }
    }

    stage('Deploy to Kubernetes') {
        steps {
            bat 'wsl kubectl apply -f k8s/deployment.yaml'
            bat 'wsl kubectl apply -f k8s/service.yaml'
        }
    }
}

}
