#note the fpm is necessary for the nginx we're using
FROM php:8.1-fpm-alpine

WORKDIR /var/www/html

COPY ./src .

#this image comes with a way to install the dependencies we need
RUN docker-php-ext-install pdo pdo_mysql

RUN chown -R laravel:laravel /var/www/html

RUN chmod -R 777 /var/www/html/storage

RUN addgroup -g 1000 laravel && adduser -G laravel -g laravel -s /bin/sh -D laravel

USER laravel

