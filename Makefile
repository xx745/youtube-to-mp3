CONTAINER_NAME=YT-2-MP3
IMAGE_NAME=youtube-to-mp3-image
CONTAINER_ID=$(shell docker ps -aqf "name=${CONTAINER_NAME}")

.PHONY: build run start stop bash

all: help

build:
	docker build . -t "${IMAGE_NAME}"

run:
	@echo "Initial container start, to run only once!"
	docker run -p 3000:3000 -d --name "${CONTAINER_NAME}" "${IMAGE_NAME}"
	docker ps
	@echo "App is running on http://localhost:3000"
	@echo "To stop container type: 'make stop'"

start:
	@echo "Stopping running container..."
	docker stop ${CONTAINER_ID}
	@echo "\n"
	@echo "Starting container..."
	@echo "(To stop container type: 'CTRL + Z', then 'make stop')"
	docker start -a -i "${CONTAINER_NAME}"

stop:
	@echo "Stopping container ID: ${CONTAINER_ID}"
	docker stop ${CONTAINER_ID}

bash:
	docker exec -it "${CONTAINER_NAME}" /bin/ash

help:
	@echo "For available targets type: 'make ' and hit TAB twice"