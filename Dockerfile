FROM node:10

ADD . /home/node/app/

WORKDIR /home/node/app/

RUN npm i

CMD [ "node", "." ]
