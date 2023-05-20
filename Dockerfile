FROM node:20-alpine as BASE

WORKDIR /usr/src/app
COPY package-lock.json package.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]