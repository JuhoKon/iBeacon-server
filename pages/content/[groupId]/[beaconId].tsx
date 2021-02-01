import { GetStaticProps, GetStaticPropsContext } from "next";
import { ReactElement } from "react";

interface Context extends GetStaticPropsContext {
  query: { groupId: string; beaconId: string };
}
export const getServerSideProps: GetStaticProps = async (context: Context) => {
  const res = await fetch("http://worldtimeapi.org/api/ip");
  const json = await res.json();

  // Here we can fetch the data per groupId and beaconId
  return {
    props: { json, params: context.query },
  };
};

const InfoTemplate = ({ params, json }): ReactElement => {
  console.log(params); //groupId, beaconId, etc. everything we want to include

  return (
    <>
      <h1>To be filled with content :-)</h1>
      <p>GroupId: {params?.groupId}</p>
      <p>BeaconId: {params?.beaconId}</p>
      <p>Current time in UNIX retrieved from API : {json.unixtime}</p>
    </>
  );
};

export default InfoTemplate;
