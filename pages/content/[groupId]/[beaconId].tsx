import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ReactElement } from "react";

interface Context extends GetStaticPropsContext {
  query: { groupId: string; beaconId: string };
}
export const getStaticPaths: any = async () => {
  return {
    paths: [
      {
        params: {
          groupId: "1",
          beaconId: "1",
        },
      },
    ],
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch data here for the pages according to the groupID and beaconID
  // We can create a custom Error page that will be statically available, when the content is not found
  // through error status returned from our BE
  const res = await fetch("http://worldtimeapi.org/api/ip");
  const json = await res.json();

  return {
    props: { json, params },

    // Re-generate the page at most per X seconds, if a request comes in
    revalidate: 10,
  };
};

const InfoTemplate = ({ params, json }): ReactElement => {
  console.log(params); //groupId, beaconId

  return (
    <>
      <h1>To be filled with content :-)</h1>
      <p>GroupId: {params?.groupId}</p>
      <p>BeaconId: {params?.beaconId}</p>
      <p>Current time in UNIX retrieved from API : {json?.unixtime}</p>
    </>
  );
};

export default InfoTemplate;
