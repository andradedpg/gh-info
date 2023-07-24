#!/bin/bash
ACTION=$1
ACTIONS=("build" "down" "restart" "logs" "init")

if [[ ! " ${ACTIONS[@]} " =~ " ${ACTION} " ]]; then
    echo "Please specify an action: [${ACTIONS[*]}]"
    exit 1
fi

if [ ! -f .env ]; then
    echo "Please create a .env file"
    exit 1
fi

BASE_COMMAND="docker compose -f compose.yaml"

if [ ${ACTION} == "build" ]; then
    if [ ! -f ./application/.env ]; then
        cp .env ./application/.env
    fi
    $BASE_COMMAND up -d --build
elif [ ${ACTION} == "down" ]; then
    $BASE_COMMAND down
elif [ ${ACTION} == "restart" ]; then
    read -p "The containers will be restarted (including clean database). Are sure? [Y/n] " -n 1 -r
    echo #
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
    $BASE_COMMAND down --volumes
    $BASE_COMMAND up -d --build
elif [ ${ACTION} == "logs" ]; then
    $BASE_COMMAND logs -f
elif [ ${ACTION} == "init" ]; then
    container=$(docker ps -aqf "name=ghinfo_app")
    docker exec -it $container node ./dist/index.js -h
    docker exec -it $container bash
fi