#!/bin/bash
BASE_DIR=$(pwd)
PROJECTID=$(gcloud config get-value project)

function build_docs() {
  apidoc -i pages/api -o docs/apidoc
}

echo Building project...
cd ..
apidoc -i pages/api -o docs/apidoc
gcloud builds submit \
  --tag gcr.io/$PROJECTID/nextjs