import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { ReactElement } from "react";

import Error from "next/error";
import { BeaconInfo } from "../../../../lib/Types";
import Loading from "../../../../components/Loading";
import * as Controller from "../../../../backend/controllers/controller";

export const getStaticPaths: any = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const beaconId = Array.isArray(params.beaconId)
    ? params.beaconId[0]
    : params.beaconId;
  const groupId = Array.isArray(params.groupId)
    ? params.groupId[0]
    : params.groupId;
  const beaconInfo = await Controller.getBeaconInfoFull(groupId, beaconId);
  return {
    props: { beaconInfo, params },
    // Re-generate the page at most per X seconds, if a request comes in
    revalidate: 10,
  };
};

const InfoTemplate = ({ params, beaconInfo }): ReactElement => {
  //TODO: proper typing
  const router = useRouter();
  const localization = params?.loc;

  if (router.isFallback) {
    return <Loading />;
  }
  if (beaconInfo.Error) {
    return <Error statusCode={404} />;
  }
  if (!["fi", "en"].includes(localization)) {
    return <Error statusCode={404} />;
  }
  beaconInfo = beaconInfo as BeaconInfo;
  return (
    <>
      <h1>{beaconInfo.title[localization]}</h1>
      <div>{beaconInfo.longDescription[localization]}</div>
      <p>GroupId: {params?.groupId}</p>
      <p>BeaconId: {params?.beaconId}</p>
      <p>Loc: {localization}</p>
    </>
  );
};

export default InfoTemplate;
