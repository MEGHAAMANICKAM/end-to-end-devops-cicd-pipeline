pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/MEGHAAMANICKAM/end-to-end-devops-cicd-pipeline.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t meghaamanickam/devops-cicd-app .'
            }
        }
    }
}
