FROM node:6.11.2-alpine
MAINTAINER Bibby <bibbynet@gmail.com>

ENV npmGlobal="cucumber@1.3.3 gulp"
WORKDIR /node_seed
VOLUME /node_seed

RUN  npm install -g $npmGlobal \
    && npm install  

CMD ["gulp", "build"]