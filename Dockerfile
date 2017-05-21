FROM nginx:alpine
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx

COPY build /usr/share/nginx/html
