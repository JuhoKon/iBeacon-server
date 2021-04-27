import React, { ReactElement } from "react";
import Header from "../../components/Header";

const AboutPage = (): ReactElement => {
  return (
    <div className="main-page">
      <Header />
      <div className="content">
        <h2>History</h2>
        <p>
          The iTour application was created in the spring of 2021 as a course
          work at LUT University. The iTour project encompasses several
          entities: iOS and Android applications, backend and database
          solutions. Based on the iTour application, an eTour was also released,
          which is licensed so that anyone can further develop this entity for
          their own needs.
        </p>
        <h2>Development Team</h2>
        <p>
          The development team for this software project consisted of master’s
          students in information technology. If you further develop solutions
          based on eTour, we hope that you will contact us and share your
          experiences, what kind of solutions and new products have been created
          based on eTour.
        </p>
        <div>
          <strong>Team:</strong>
          <div>
            Mail:&nbsp;
            <a href="mailto: beacon.etour@gmail.com">beacon.etour@gmail.com</a>
          </div>

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
            <li>
              GitHub: &nbsp;
              <a href="https://github.com/Beacon-etour">
                https://github.com/Beacon-etour
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
