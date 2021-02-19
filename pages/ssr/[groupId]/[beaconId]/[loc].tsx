import { GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";
import React, { ReactElement } from "react";

import Error from "next/error";
import { BeaconInfo } from "../../../../lib/Types";
import Loading from "../../../../components/Loading";
import * as Controller from "../../../../backend/controllers/controller";

export async function getServerSideProps({ query }) {
  const beaconId = Array.isArray(query.beaconId)
    ? query.beaconId[0]
    : query.beaconId;
  const groupId = Array.isArray(query.groupId)
    ? query.groupId[0]
    : query.groupId;
  const beaconInfo = await Controller.getBeaconInfoFull(groupId, beaconId);
  return {
    props: { beaconInfo, query },
  };
}

const InfoTemplate = ({ query, beaconInfo }): ReactElement => {
  //TODO: proper typing
  const router = useRouter();
  const localization = query?.loc;

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
      <p>GroupId: {query?.groupId}</p>
      <p>BeaconId: {query?.beaconId}</p>
      <p>Loc: {localization}</p>
    </>
  );
};

export default InfoTemplate;
