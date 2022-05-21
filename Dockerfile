FROM nginx:latest
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/mariage-solene-florent /usr/share/nginx/html/
EXPOSE 80