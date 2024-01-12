# Running this project
Run the included shell script [`docker_setup.sh`](docker_setup.sh) or enter the following commands to run this project:
```
docker network create favorites-net
docker run -d --name mongodb --network favorites-net mongo
docker build --tag favorites-node .
docker run --name favorites -d --rm -p 3000:3000 --network favorites-net favorites-node
```

After creating the containers, the API at endpoint `/favorites` from `localhost:3000` for `GET` and `POST` requests should be accessable. `POST` expects an JSON object in the following form:


```
{
    "name",
    "type":"movie" or "character",
    "url"
}
```

Included in the REST folder is [`favorites.http`](./REST/favorites.http) to test the enpoint using the REST Template extension for VS Code.

Completed by taking the Docker & Kubernetes: The Practical Guide from Academind.