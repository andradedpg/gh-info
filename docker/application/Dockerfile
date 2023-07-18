FROM node:18.16.1-slim AS builder
WORKDIR /usr/src/app
COPY ./application .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:18.16.1-slim AS starter
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY ./application/package.json .
RUN yarn install
CMD [ "node", "dist/index.js" ]