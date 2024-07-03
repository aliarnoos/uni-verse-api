
# Uni-verse Serverless Backend

## Installation

Make sure you have [Docker Compose](https://docs.docker.com/compose/install/) insatlled on your machine!

Note: the Docker container provides a configured container that has Node.js 20 and DynamoDB insatlled

## Run The App

- The below command is to build a container and run the app:
```bash
docker-compose up --build
```

Note: the container will still be running even after the terminal is closed. 

- Run the below command to stop the container:
```bash
docker-compose down
```
    
Note: when installing a new package, you must rebuild the container:

- Run the below commands to stop the current the container and build new oneß:
```bash
docker-compose down

docker-compose up --build

```