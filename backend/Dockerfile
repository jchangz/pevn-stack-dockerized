FROM node:14.15.0-alpine

RUN mkdir /opt/app && chown node:node /opt/app

WORKDIR /opt/app
USER node
COPY package.json package-lock*.json ./
RUN npm ci && npm cache clean --force
ENV PATH /opt/app/node_modules/.bin:$PATH

EXPOSE 3001

WORKDIR /opt/app/backend