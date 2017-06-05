FROM node:6.10.3-alpine
MAINTAINER Bibby <bibbynet@gmail.com>
ENV npmGlobal="cucumber@1.3.3 gulp"
WORKDIR /node_seed
VOLUME /node_seed
RUN npm install -g $npmGlobal
CMD ["gulp", "build"]