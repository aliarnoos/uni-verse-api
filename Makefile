# Makefile

PROJECT_NAME=uni-verse-serverless
CONTAINER_NAME=uni-verse-serverless
# Docker Compose commands
DC=docker-compose
DC_BUILD=$(DC) build
DC_UP=$(DC) up
DC_DOWN=$(DC) down

# Docker commands
DOCKER=docker
DOCKER_BUILD=$(DOCKER) build -t $(PROJECT_NAME) .

# Targets
.PHONY: all build start stop restart logs clean

all: build

build:
	@echo "Building Docker images..."
	$(DC_BUILD)

start:
	@echo "Starting Docker containers..."
	$(DC_UP)

stop:
	@echo "Stopping Docker containers..."
	$(DC_DOWN)

restart: stop start

logs:
	@echo "Showing logs..."
	$(DC) logs -f

clean: stop
	@echo "Removing Docker containers and images..."
	$(DC) down --rmi all

# delete-containers:
# 	CONTAINER_IDS=$$($(DOCKER) ps -aqf "name=$(CONTAINER_NAME)"); \
# 	if [ ! -z "$$CONTAINER_IDS" ]; then \
# 		$$CONTAINER_IDS | xargs $(DOCKER) rm -f; \
# 		echo "Successfully deleted containers: $$CONTAINER_IDS"; \
# 	else \
# 		echo "No containers found with name $(CONTAINER_NAME)"; \
# 	fi

delete-image:
	@echo "Deleting Docker images..."
	$(DOCKER) rmi -f $(shell $(DOCKER) images -q $(PROJECT_NAME)-app)