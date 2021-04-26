#!/bin/bash

REDISHOST=10.194.53.3
REDISPORT=6379
REGION=europe-west3
PROJECTID=$(gcloud config get-value project)
APPCONNECTOR=appconnector
echo Deploying forceUpdate-function

gcloud functions deploy forceUpdate \
--runtime nodejs10 \
--trigger-http \
--region $REGION \
--vpc-connector projects/$PROJECTID/locations/$REGION/connectors/$APPCONNECTOR \
--set-env-vars REDIS_HOST=$REDISHOST,REDIS_PORT=$REDISPORT
