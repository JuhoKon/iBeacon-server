import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { ReactElement } from "react";

/*export async function getStaticPaths() {
  const content = [
    {
      groupId: "1",
      beaconId: "2",
    },
    {
      groupId: "1",
      beaconId: "1",
    },
    {
      groupId: "1",
      beaconId: "3",
    },
    {
      groupId: "2",
      beaconId: "1",
    },
  ];

  return {
    paths: content.map((content) => {
      return {
        params: {
          groupId: content.groupId,
          beaconId: content.beaconId,
        },
      };
    }),
    fallback: false,
  };
}*/
/*export async function getStaticProps({ params }) {
  const res = await fetch("http://worldtimeapi.org/api/ip");
  const json = await res.json();
  // Here we can fetch the data per groupId and beaconId
  return {
    props: { params, json },
  };
}*/
export async function getServerSideProps(context: any) {
  const res = await fetch("http://worldtimeapi.org/api/ip");
  const json = await res.json();

  // Here we can fetch the data per groupId and beaconId
  return {
    props: { json, params: context.query },
  };
}

const InfoTemplate = ({ params, json }): ReactElement => {
  console.log(params); //groupId, beaconId, etc. everything we want to include

  return (
    <>
      <h1>To be filled with content :-)</h1>
      <p>GroupId: {params.groupId}</p>
      <p>BeaconId: {params.beaconId}</p>
      <p>Current time in UNIX retrieved from API : {json.unixtime}</p>
    </>
  );
};

export default InfoTemplate;
