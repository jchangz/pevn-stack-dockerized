FROM node:14.15.0-alpine

WORKDIR /home/node/app/backend

COPY . .

RUN npm install

EXPOSE 3001

CMD npm run start:dev