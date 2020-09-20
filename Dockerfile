FROM node:12-alpine as node
WORKDIR /app
COPY package.json /app
RUN npm install

COPY . .
FROM nginx:1.17.1-alpine
COPY --from=node /app/dist/app /usr/share/nginx/html
