#! /bin/bash
NETWORK_NAME="goals-app-net"
docker network create $NETWORK_NAME
docker run -d --rm --name goals-db -v data:/data/db --network $NETWORK_NAME -e MONGO_INITDB_ROOT_USERNAME=max -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
docker build --tag node-goals-api ./backend
docker run --name goals-api -d --rm -p 8080:8080 --network $NETWORK_NAME -e MONGO_INITDB_ROOT_USERNAME=max -e MONGO_INITDB_ROOT_PASSWORD=secret node-goals-api
docker build --tag node-goals ./frontend
docker run --name goals-web -p 3000:3000 --rm node-goals