import React, { ReactElement } from "react";
import Header from "../../components/Header";

const AboutPage = (): ReactElement => {
  return (
    <div className="main-page">
      <Header />
      <div className="content">
        <h2>Historia</h2>
        <p>
          iTour-sovellus on luotu keväällä 2021 LUT-yliopiston kurssityönä.
          iTour-projekti käsittää usemman kokonaisuuden: iOS ja Android
          -sovellukset, backend ja tietokantaratkaisut. Sovelluksen pohjalta
          julkaistiin myös eTour, joka on lisensoitu niin, että kuka tahansa voi
          jatkokehittää tätä kokonaisuutta omiin tarpeisiinsa.
        </p>
        <h2>Kehittäjät </h2>
        <p>
          Tämän ohjelmistoprojektin kehitystiimi koostui tietotekniikan
          maisteriopiskelijoista. Jos jatkokehität ratkaisuja eTour:in pohjalta,
          toivomme, että otat meihin yhteyttä ja jaat kokemuksia, että
          minkälaisia ratkaisuja ja uusia tuotteita eTourin pohjalta on
          syntynyt.
        </p>
        <div>
          <strong>Tiimi:</strong>
          <p>etour@mail.com</p>
          <ul>
            <li>Juho Kontiainen</li>
            <li>Topi Penttilä</li>
            <li>Piret Niva</li>
            <li>Riina Purovesi</li>
            <li>Mahyar Mohammadi</li>
            <li>Loan Ngo</li>
          </ul>
          <strong>Etour:</strong>
          <ul>
            <li>Linkki eTour/GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
