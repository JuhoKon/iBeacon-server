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
  let beaconInfo = await Controller.getBeaconInfoFull(
    groupId,
    beaconId
  ).catch((e) => {});
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
      <ImageComponent imageUrl={beaconInfo.mediaUrl.imageUrl} />
      <div className="content">
        <Intro intro={beaconInfo.intro} localization={localization} />
        <Description
          description={beaconInfo.imageDescription}
          localization={localization}
        />
        <VideoComponent videoUrl={beaconInfo.mediaUrl.videoUrl} />
        <Description
          description={beaconInfo.videoDescription}
          localization={localization}
        />
      </div>
    </div>
  );
};

const Intro = ({
  intro,
  localization,
}: {
  intro?: any;
  localization: string;
}) => {
  return <>{intro && <p className="intro">{intro[localization]}</p>}</>;
};

const Description = ({
  description,
  localization,
}: {
  description?: any;
  localization: string;
}) => {
  return <>{description && <p>{description[localization]}</p>}</>;
};

const Header = () => {
  return (
    <div className="header-component">
      <Image
        src="https://storage.googleapis.com/beaconinfomedia/imatra_tunnus.png"
        alt="Image"
        width="238px"
        height="46px"
      />
    </div>
  );
};

const ImageComponent = ({ imageUrl }: { imageUrl?: string }) => {
  return (
    <>
      {imageUrl && (
        <div className="imageContainer">
          <Image
            layout="responsive"
            src={imageUrl}
            alt="Image"
            height="auto"
            width="auto"
            className="image123"
          />
        </div>
      )}
    </>
  );
};
const VideoComponent = ({ videoUrl }: { videoUrl?: string }) => {
  return (
    <>
      {videoUrl && (
        <iframe
          src={videoUrl}
          title="Beaconinfo video"
          width="100%"
          height="250px"
          allowFullScreen
        />
      )}
    </>
  );
};
export default InfoTemplate;
