
.PHONY: all build start stop restart logs clean delete-containers delete-image

all: build

build:
	@echo "Building Docker images..."
	docker-compose build

start:
	@echo "Starting Docker containers..."
	docker-compose up

stop:
	@echo "Stopping Docker containers..."
	docker-compose down

restart: stop start

logs:
	@echo "Showing logs..."
	docker-compose logs -f

clean: stop
	@echo "Removing Docker containers and images..."
	docker-compose down --rmi all
