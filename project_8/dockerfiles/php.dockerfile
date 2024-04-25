#note the fpm is necessary for the nginx we're using
FROM php:8.2-fpm-bullseye

WORKDIR /var/www/html

#this image comes with a way to install the dependencies we need
RUN docker-php-ext-install pdo
RUN docker-php-ext-install pdo_mysql
#the command/entrypoint of the base image is used since we won't specify
# Ignoring https://dl-cdn.alpinelinux.org/alpine/v3.17/main: temporary error
