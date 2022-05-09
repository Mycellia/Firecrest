import React from "react";
import { HeroSection } from "../components/Hero/HeroStyles";
import { Container } from "../Styles";

export const About = () => {
  return (
    <Container>
      <div className="About">
        <h2>Trust Firecrest with your travel plans!</h2>
        <div style={{ textSizeAdjust: "80" }}>
          {" "}
          Firecrest is an online flight booking system that wishes to make
          seeing the world easier
          <br />
          With every query Firecrest provides a variety of airlines that
          satisfies the users exact departure and arrival point, cabin class,
          the number of passengers, and seat preference on specific dates and
          times. The website will provide a layout of seats on the flight for
          each cabin class (e.g., 01A, 50F). If a seat is occupied, this will be
          indicated by a greyed-out cross in a box.
        </div>
      </div>
    </Container>
  );
};
