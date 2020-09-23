FROM node AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

### STAGE 2: Run ###

FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /usr/src/app/dist/app /usr/share/nginx/html

EXPOSE 8008