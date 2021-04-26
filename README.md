# iBeacon | NextJS Backend & Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Architecture

In the iBeacon project, NextJS is used as the backend to provide API endpoints for the mobile client, and as a frontend for providing a few static pages, and a dynamic web template.

![architecture](https://user-images.githubusercontent.com/37773658/114718159-69977980-9d3e-11eb-9791-df560c21f4c1.PNG)

The solution uses Firestore as the DB, as well as Redis for caching the requests (BE sets keys with a TTL, when keys expire, BE updates the keys in the cache).

### API Endpoint documentation

See this: [Built with apidocs](https://juhokon.github.io/NextJS-Test/apidoc/index.html).

# Development

## Redis

In order to develop the application locally you need to have `Redis` running on your system! The host and port for development is configured on the `.env` - file.

## Database

We are using the GCP's client library for Firestore. To interact with the database locally, see [this.](https://cloud.google.com/docs/authentication/production#automatically) Note that you have to configure this to develop the application.

## Getting Started

After you have Redis running and GCP client authentication set up, you're ready to start developing the application.

First, install the needed packages:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the content page by modifying `pages/content/[groupId]/[beaconInfoId]/[loc]`. The page auto-updates as you edit and save the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/](http://localhost:3000/api/). This endpoint can be edited in `pages/api/*.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. Our endpoints are found here.

Backend logic itself is found under `backend` - folder.

Note that although backend logic exists under the `backend` - folder, the `routes` are in the `pages/api` - folder.

## Pages

The application uses dynamic routing. Pages are found in `pages/content[groupId]/[beaconInfoId]/[loc].tsx`. For example for group 1 and beaconInfoId 12, the page would be: [http://localhost:3000/content/1/12/en](English) [http://localhost:3000/content/1/12/fi](Finnish). The routing and data fetching are done by groupdId and beaconInfoId, beaconInfo-objects exist inside the Tour-object. See database documentation for more information on how the DB schema and logic works.

The routing and data fetching are done by groupdId and beaconInfoId, beaconInfo-objects exist inside the Tour-object. Upon request, the React component first fetches data from the DB/cache based on the request query (/content/X/Y/en), then populates the template, NextJS renders the HTML Server-Side, and returns the rendered HTML to the requester.  

### Static pages

About and landing pages are static, and are found under `pages/` folder (/about and /landing). En and fi - localizations are currently available for them.

Accessing them is straightforward: [http://localhost:3000/landing/fi] [http://localhost:3000/about/en].

## Cloud Functions

We have one Cloud Function deployed to the GCP (found under /gfunctions - folder along with deployment scripts). It is used to reset all cache keys, as the TTL should be set to a high value, so we are easing off the load from the DB.
## API Endpoints

The pages/api directory is mapped to /api/*. Files in this directory are treated as API routes instead of React pages, this is where our endpoints are found. So the API routes can be accessed on http://localhost:3000/api/. these endpoints can be edited in pages/api/*.ts. 

Backend logic itself is found under backend – folder. Note that although backend logic exists under the backend - folder, the routes are in the pages/api - folder. 

API-documentation is generated on the fly using apiDoc, and is found in the docs/apidoc-folder. 
# Deployment

The deployment scripts work using the `gloud command-line tool`, you need to have it downloaded and installed, and configured on the account that you want to deploy the project to.

I myself, used this command to configure the account and choose the GCP-project:

```bash
gcloud init
```

After configuring `gcloud`-CLI tool, the deploying itself works by running the following commands:

```bash
yarn deploy
```

Or manually run the scripts:

```bash
cd scripts/ && ./build.sh
cd scripts/ && ./deploy.sh
```

You can edit the scripts if you need to change configurations (such as REDIS IP change). The build script builds a container image (see the `Dockerfile`), loads the image to the Container Registry, and the deploy script then deploys the container image to Cloud Run, [instructions.](https://cloud.google.com/run/docs/quickstarts/build-and-deploy)

Once the application is running in the Google Cloud environment, it uses the default service account to interact and call other Google Cloud APIs. In our case, it uses the Firestore DB and Memorystore Redis. You might need to change the Service Account's access rights.

To use memorystore (Redis) on the Google Cloud, we need to configure Serverless VPC Access (`deploy.sh` - file has the configuration for `Redis host` and `Redis port`). Cloud Run must also be in the same region as the Redis instance. For instructions see: [instructions.](https://cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run)

![gcloudbuild](https://user-images.githubusercontent.com/37773658/114723953-c6496300-9d43-11eb-9beb-bfc633c7fe53.PNG)
`Figure of the build process in GCP.`

Also to build apiDoc, you need to have apiDoc installed globally.

```bash
 npm install -g apidoc
```

## GCP Environment figure

Once the application is running in the Google Cloud environment, it uses the default service account to interact and call other Google Cloud APIs. In our case, it uses the Firestore DB and Memorystore Redis. You might need to change the Service Account's access rights. 

To use memorystore (Redis) on the Google Cloud, we need to configure Serverless VPC Access (deploy.sh - file has the configuration for Redis host and Redis port!). Cloud Run must also be in the same region as the Redis instance (See Fig X.). For more instructions see: https://cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run. 

![gcloudarch](https://user-images.githubusercontent.com/37773658/114723913-ba5da100-9d43-11eb-94a1-085b44960316.PNG)
`Figure of the Google Cloud Environment`

Now the NextJS application should be running in the Google Cloud Platform. The GCP-environment uses the following services: 

* Firestore 
* * Database
* Memorystore Redis
*  * Cache
*  Cloud Storage
*  * For storing artefacts and builds (from Cloud Run) 
*  * For storing images for Firestore (DB objects contains links to our Cloud Storage) 
*  Serverless VPC Access Connector 
*  * Enables Cloud Run to connect to our VPC Network (where Memorystore Redis exists) 
*  Cloud Functions 
*  * Provides an endpoint for resetting the Cache keys (called forceUpdate in the GCP) 
*  * Files are found inside the BE-repo under /gfunctions - folder along with deployment scripts. 


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
