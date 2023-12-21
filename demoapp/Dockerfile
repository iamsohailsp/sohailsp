FROM node:21-alpine3.18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN "echo hello"
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
