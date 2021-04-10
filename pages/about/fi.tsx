import React, { ReactElement } from "react";
import Header from "../../components/Header";

const AboutPage = (): ReactElement => {
  return (
    <div className="main-page">
      <Header />
      <div className="title">
        <h1>Meistä</h1>
      </div>
      <div className="content">
        <p>iTour-sovellus luotiin kurssityönä keväällä 2021 LUT: lla.</p>
        <h2>Ketä me olemme?</h2>
        <p> Olemme LUT:n opiskelijoita...</p>
      </div>
    </div>
  );
};

export default AboutPage;
