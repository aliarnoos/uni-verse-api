
# Uni-verse Serverless Backend

## Installation

- Make sure you have [Docker Compose](https://docs.docker.com/compose/install/) insatlled on your machine!

- Also it is recommended to install [DynamoDB Workbench](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.settingup.html source=post_page-----8d3a9adec626--------------------------------)

Note: the Docker container provides a configured container that has Node.js 20 and DynamoDB insatlled

## Run The App

- The below command is to build a container for the first time:
```bash
make build
```

- After the build you can run the app:
```bash
make start
```


Note: the container will still be running even after the terminal is closed. 

- Run the below command to stop the container:
```bash
make down
```
    
- When installing a new package, you must rebuild the container:

Note: Old containers might still be saved locally on your machine. It is recommended to delete them before the build:
```bash
make clean

```

- Run the below commands to stop the current the container and build new oneß:
```bash
make stop

make build

make start

```

