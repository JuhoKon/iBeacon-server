import React, { ReactElement } from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Beacon info</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
