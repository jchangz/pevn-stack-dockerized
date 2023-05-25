FROM node:14.15.0-alpine

WORKDIR /home/node/app/backend

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

EXPOSE 3001