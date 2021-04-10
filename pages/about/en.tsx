import React, { ReactElement } from "react";
import Header from "../../components/Header";

const AboutPage = (): ReactElement => {
  return (
    <div className="main-page">
      <Header />
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="content">
        <p>
          iTour application was created as a coursework in Spring 2021 at LUT.
        </p>
        <h2>Who are we?</h2>
        <p> We are students at LUT...</p>
      </div>
    </div>
  );
};

export default AboutPage;
