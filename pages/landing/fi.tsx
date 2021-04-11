import React, { ReactElement } from "react";
import Header from "../../components/Header";
import ImageComponent from "../../components/Image";

const LandingPage = (): ReactElement => {
  return (
    <div className="main-page">
      <Header />
      <div className="title">
        <h1>Tule ja koe Mansikkalan koulu!</h1>
      </div>
      <ImageComponent
        imageUrl={
          "https://storage.googleapis.com/imatra_media/images/air_image.jpg"
        }
      />
      <div className="content">
        <p>
          Jotta voisit osallistua retkille, saavuthan Mansikkalan
          koulukeskukseen!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
