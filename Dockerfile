###FROM nginx-latest
FROM ubuntu-latest
RUN apt-get update && apt-get upgrade -y
RUN apt-get -y install nginx
COPY index.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY script.js /usr/share/nginx/html
