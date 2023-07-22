FROM node:18.16.1-slim AS builder
WORKDIR /usr/src/app
COPY ./application .
RUN apt-get update -y && apt-get install rsync -y
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:18.16.1-slim AS starter
WORKDIR /usr/src/app

ENV APP_CLI_NAME=${APP_CLI_NAME:-gh-info-cli}

COPY --from=builder /usr/src/app/dist ./dist
COPY ./application/package.json .
RUN yarn install

RUN apt-get update -y && apt-get install supervisor -y
COPY ./docker/application/supervisor.conf /supervisor/supervisor.conf 

COPY ./application/migrations/ ./migrations
COPY ./docker/application/init.sh /init.sh 
RUN sed -i -e 's/\r$//' /init.sh
RUN chmod +x /init.sh 

RUN echo 'alias ${APP_CLI_NAME}="node /usr/src/app/dist/index.js"' >> ~/.bashrc

ENTRYPOINT [ "/init.sh" ]