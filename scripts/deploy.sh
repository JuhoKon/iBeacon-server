#!/bin/bash

REDISHOST=10.194.53.3
REDISPORT=6379
REGION=europe-west3
PROJECTID=$(gcloud config get-value project)

echo Deploying project...
cd ..
gcloud run deploy \
  --image gcr.io/$PROJECTID/nextjs \
  --platform managed \
  --allow-unauthenticated \
  --region $REGION \
  --vpc-connector appconnector \
  --set-env-vars REDIS_HOST=$REDISHOST,REDIS_PORT=$REDISPORT
