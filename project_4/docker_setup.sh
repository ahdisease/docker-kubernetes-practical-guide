#! /bin/bash
docker network create favorites-net
docker run -d --name mongodb --network favorites-net mongo
docker build --tag favorites-node .
docker run --name favorites -d --rm -p 3000:3000 --network favorites-net favorites-node