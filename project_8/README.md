# Setup
Run laravel setup command.

`docker-compose run --rm composer create-project --prefer-dist laravel/laravel:^8.0 .`

Ensure that the [laravel .env file](./src/.env) is configured for our setup.


> DB_CONNECTION=mysql <br/>
> DB_HOST=**mysql** <br/>
> DB_PORT=3306 <br/>
> DB_DATABASE=**homestead** <br/>
> DB_USERNAME=**homestead** <br/>
> DB_PASSWORD=**secret** <br/>

`DB_HOST` uses the service name from the [docker-compose.yaml](./docker-compose.yaml) file

# Run
Start server, php, and mysql services
`docker-compose up -d server php mysql`