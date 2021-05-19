FROM node:12-alpine as build


WORKDIR /app

COPY package.json ./
RUN yarn install --silent
COPY . .
RUN yarn build

FROM node:12-alpine

WORKDIR /app

COPY package.json ./
RUN yarn install --silent
COPY --from=build /app/public ./public

ENTRYPOINT ["yarn", "serve"]