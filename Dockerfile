FROM nginx:mainline-alpine

RUN rm /etc/nginx/conf.d/*

ADD main.conf /etc/nginx/conf.d/

ADD www/ /usr/share/www