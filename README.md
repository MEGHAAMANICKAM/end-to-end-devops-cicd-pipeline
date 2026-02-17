# 🚀 End-to-End CI/CD Pipeline using Jenkins, Docker & Kubernetes

## 📌 Project Overview
This project demonstrates a complete CI/CD pipeline that automates the process of building, pushing, and deploying a containerized web application using:

- Jenkins
- Docker
- Docker Hub
- Kubernetes (Minikube)
- GitHub

The pipeline ensures that every code change is automatically built and deployed with zero manual intervention.

---

## 🧱 Architecture

Developer → GitHub → Jenkins Pipeline → Docker Build & Push → Kubernetes Deployment → Live Application

---

## ⚙️ Tech Stack

- Node.js
- Express.js
- Docker
- Jenkins
- Kubernetes (Minikube)
- GitHub
- WSL (Ubuntu)

---

## 🔄 CI/CD Pipeline Workflow

1️⃣ Developer pushes code to GitHub  
2️⃣ Jenkins pulls the latest source code  
3️⃣ Docker image is built automatically  
4️⃣ Image is pushed to Docker Hub  
5️⃣ Minikube cluster starts automatically (if stopped)  
6️⃣ Kubernetes deployment is updated  
7️⃣ Application becomes live  

---

## 📁 Project Structure

```
devops-cicd-project/
│── app/
│ ├── server.js
│ └── package.json
│
│── k8s/
│ ├── deployment.yaml
│ └── service.yaml
│
│── Dockerfile
│── Jenkinsfile
```

---

## 🐳 Docker

Builds a lightweight Node.js application image.

```bash
docker build -t meghaamanickam/devops-cicd-app .
```
## ☸️ Kubernetes Deployment

```bash
kubectl apply -f k8s/
```
## 🔐 Jenkins Credentials

Docker Hub credentials are securely stored and injected into the pipeline using Jenkins Credentials Manager.

## 🌐 Access the Application

```bash
minikube service devops-cicd-service
```

## ✨ Key Features

- ✔ Fully automated CI/CD pipeline
- ✔ Dockerized application
- ✔ Kubernetes deployment
- ✔ Automatic Minikube start during deployment
- ✔ Secure credential handling
- ✔ GitHub integration


## 📸 Output

The application is successfully deployed and accessible via Kubernetes service.

## 📚 What I Learned

- Setting up Jenkins pipelines from scratch
- Managing Docker permissions for Jenkins
- Kubernetes deployment automation
- Secure credential management
- Debugging real-world CI/CD issues
- End-to-end DevOps workflow

## 👩‍💻 Author

**Meghaa Manickam**  
Aspiring DevOps & Cloud Engineer ☁️🚀


