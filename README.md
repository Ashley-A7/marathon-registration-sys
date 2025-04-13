# Marathon Registration System - POC

This is a Proof of Concept (POC) project for a marathon registration system, featuring two backend implementations (Node.js and Python/Flask) using a shared MongoDB database. The project is containerized using Docker for easy setup and testing.

Getting Started

Follow the steps below to get the project running on your local machine using Docker.

### 1. Clone the Repository
download the ZIP file and extract it into a folder of your choice.

2. Build the Docker Containers
From the root directory, run:

docker-compose build
This will build the containers for:

Node.js backend
Python backend
MongoDB database

3. Run the Project
To start all services:

docker-compose up
Once everything is running, you can open the registration form in your browser:

Python App:
http://localhost:5000 or http://127.0.0.1:5000/ 

Node.js App:
http://localhost:3000 or http://127.0.0.1:3000/

4. Stop the Project
When you're done, press Ctrl + C to stop the services, and then run:
docker-compose down
