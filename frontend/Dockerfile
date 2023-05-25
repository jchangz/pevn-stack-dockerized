FROM node:14.15.0

WORKDIR /home/node/app/frontend

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force