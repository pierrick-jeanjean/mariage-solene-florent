FROM nginx:latest
COPY ./dist/mariage-solene-florent /usr/share/nginx/html/
EXPOSE 80