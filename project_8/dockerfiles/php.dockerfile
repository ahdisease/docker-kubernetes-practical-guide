#note the fpm is necessary for the nginx we're using
FROM php:8.1-fpm-alpine

WORKDIR /var/www/html

#this image comes with a way to install the dependencies we need
RUN docker-php-ext-install pdo pdo_mysql
#the command/entrypoint of the base image is used since we won't specify