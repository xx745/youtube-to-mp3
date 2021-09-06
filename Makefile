NAME=$(shell whoami)

.PHONY: build run stop

all: help

build:
	docker build . -t "${NAME}/youtube-to-mp3"

run:
	docker run -p 3000:3000 -d "${NAME}/youtube-to-mp3"
	docker ps
	@echo "App is running on http://localhost:3000"
	@echo "To stop container type: 'docker stop <CONTAINER ID>'"

help:
	@echo "For available targets type: 'make ' and hit TAB"