import Image from "next/image";
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
    <div className="main-page">
      <Header />
      {beaconInfo.mediaUrl.pictureUrl && (
        <div className="imageContainer">
          <Image
            layout="responsive"
            src={beaconInfo.mediaUrl.pictureUrl}
            alt="Image"
            height="auto"
            width="auto"
            className="image123"
          />
        </div>
      )}
      <div className="content">
        <h1>{beaconInfo.title[localization]}</h1>

        <Description beaconInfo={beaconInfo} localization={localization} />

        {beaconInfo.mediaUrl.videoUrl && (
          <iframe
            src={beaconInfo.mediaUrl.videoUrl}
            title="Beaconinfo video"
            width="100%"
            height="250px"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

const Description = ({ beaconInfo, localization }) => {
  return (
    <>
      {beaconInfo.longDescription[localization].map(
        (chapter: React.ReactNode) => (
          <p>{chapter}</p>
        )
      )}
    </>
  );
};

const Header = () => {
  return (
    <div className="header-component">
      <Image src="/imatra_tunnus.png" alt="Image" width="238px" height="46px" />
    </div>
  );
};
export default InfoTemplate;
