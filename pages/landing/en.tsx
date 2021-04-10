import React, { ReactElement } from "react";
import Header from "../../components/Header";
import ImageComponent from "../../components/Image";

const LandingPage = (): ReactElement => {
  return (
    <div className="main-page">
      <Header />
      <div className="title">
        <h1>Whoops!</h1>
      </div>
      <ImageComponent
        imageUrl={
          "https://storage.googleapis.com/imatra_media/images/air_image.jpg"
        }
      />
      <div className="content">
        <p>
          In order to take part in the tours, please make your way to the
          Mansikkala schoolcenter!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
