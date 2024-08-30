import React from "react";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

const About = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBContainer>
        <MDBTypography note noteColor="primary">
          It is a website for music producers where you will find bpost related to
          the best, industry standard plugins and virtual instruments (vsts)
        </MDBTypography>
      </MDBContainer>
    </div>
  );
};

export default About;
