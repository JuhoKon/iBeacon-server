import { useRouter } from "next/dist/client/router";
import React, { ReactElement } from "react";

import Error from "next/error";
import { BeaconInfo } from "../../../../lib/Types";
import Loading from "../../../../components/Loading";
import * as Controller from "../../../../backend/controllers/controller";
import Header from "../../../../components/Header";
import ImageComponent from "../../../../components/Image";
import Intro from "../../../../components/Intro";
import Description from "../../../../components/Description";
import VideoComponent from "../../../../components/Video";

export async function getServerSideProps({ query }) {
  const beaconInfoId = Array.isArray(query.beaconInfoId)
    ? query.beaconInfoId[0]
    : query.beaconInfoId;
  const groupId = Array.isArray(query.groupId)
    ? query.groupId[0]
    : query.groupId;
  let beaconInfo = await Controller.getBeaconInfoFull(
    groupId,
    beaconInfoId
  ).catch((e) => {
    // console.log(e);
  });
  // In case of error, set beaconInfo to null
  // And handle error by showing 404-page in the template
  if (!beaconInfo) {
    beaconInfo = null;
  }
  return {
    props: { beaconInfo, query },
  };
}

const InfoTemplate = ({
  query,
  beaconInfo,
}: {
  query: any;
  beaconInfo: BeaconInfo;
}): ReactElement => {
  const router = useRouter();
  const localization = query?.loc;

  if (router.isFallback) {
    return <Loading />;
  }
  if (!beaconInfo) {
    return <Error statusCode={404} />;
  }

  // Can be done dynamically too
  if (!["fi", "en"].includes(localization)) {
    return <Error statusCode={404} />;
  }

  return (
    <div className="main-page">
      <Header />
      <div className="title">
        <h1>{beaconInfo.location && beaconInfo.location[localization]}</h1>
      </div>
      {beaconInfo.mediaUrl && beaconInfo.mediaUrl.imageUrl && (
        <ImageComponent imageUrl={beaconInfo.mediaUrl.imageUrl} />
      )}
      <div className="content">
        {beaconInfo.intro && <Intro intro={beaconInfo.intro[localization]} />}

        {beaconInfo.imageDescription && (
          <Description
            description={beaconInfo.imageDescription[localization]}
          />
        )}

        {beaconInfo.mediaUrl && beaconInfo.mediaUrl.videoUrl && (
          <VideoComponent videoUrl={beaconInfo.mediaUrl.videoUrl} />
        )}

        {beaconInfo.videoDescription && (
          <Description
            description={beaconInfo.videoDescription[localization]}
          />
        )}
      </div>
    </div>
  );
};

export default InfoTemplate;
