FROM nginx
RUN apt-get update && apt-get upgrade -y
COPY index.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY script.js /usr/share/nginx/html
