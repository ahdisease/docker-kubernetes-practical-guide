# Create Network
docker network create goals-app-net

# Run MongoDB Container
docker run --name goals-db \
    -e MONGO_INITDB_ROOT_USERNAME=max \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    -v data:/data/db \
    --rm \
    -d \
    --network goals-app-net \
    mongo

# Build Node API Image
docker build -t goals-api .

# Run Node API Container
docker run --name goals-api \
    -e MONGO_INITDB_ROOT_USERNAME=max \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    -v logs:/app/logs \
    -v /{Absolute path to working directory}:/app \
    -v /app/node_modules \
    --rm \
    -d \
    --network goals-app-net \
    -p 80:80 \
    goals-api

# Build React SPA Image
docker build -t goals-react .

# Run React SPA Container
docker run --name goals-web \
    -v /{Absolute path to working directory}/src:/app/src \
    --rm \
    -d \
    -p 3000:3000 \
    -it \
    goals-react

# Stop all Containers
docker stop mongodb goals-api goals-web