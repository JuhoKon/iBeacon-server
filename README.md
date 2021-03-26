This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## API Documentation

[Built with apidocs](https://juhokon.github.io/NextJS-Test/apidoc/index.html)

## Development | Redis

You need to have `Redis` running on your system! The host and port for development is configured on the `.env` - file.

## Database

We are using the GCP's client library for Firestore. To interact with the database locally, see [this.](https://cloud.google.com/docs/authentication/production#automatically) Note that you have to configure this to develop the application.

## Getting Started

After you have Redis running and GCP client authentication set up, you're ready to start developing the application.

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the content page by modifying `pages/content/[groupId]/[beaconId]/[loc]`. The page auto-updates as you edit and save the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/](http://localhost:3000/api/). This endpoint can be edited in `pages/api/*.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. Our endpoints are found here.

Backend logic itself is found under `backend` - folder.

Note that although backend logic exists under the `backend` - folder, the `routes` are in the `pages/api` - folder.

## Pages

Pages are found in `pages/content[groupId]/[beaconId]/[loc].tsx`. For example for group 1 and beacon 12, the page would be: [http://localhost:3000/content/1/12/en] (English) [http://localhost:3000/content/1/12/fi] (Finnish)

Data fetching is done server-side on the page.

## Deployment

Just run the following commands:

```bash
yarn deploy
```

Or manually run the scripts:

```bash
cd scripts/ && ./build.sh
cd scripts/ && ./deploy.sh
```

You can edit the scripts if you need to change configurations. The build script builds a container image, loads the image to the Container Registry, and the deploy script then deploys the container image to Cloud Run, [instructions.](https://cloud.google.com/run/docs/quickstarts/build-and-deploy)

Once the application is running in the Google Cloud environment, it uses the default service account to interact and call other Google Cloud APIs. In our case, it uses the Firestore DB. You might need to change the Service Account's access rights.

To use memorystore (Redis) on the Google Cloud, we need to configure Serverless VPC Access (`deploy.sh` - file has the configuration for `Redis host` and `Redis port`). Cloud Run must also be in the same region as the Redis instance. For instructions see: [instructions.](https://cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run)

Also to build apiDoc, you need to have apiDoc installed globally.

```bash
 npm install -g apidoc
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

