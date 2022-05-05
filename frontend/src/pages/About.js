import React from "react";
import { Container } from "../Styles";

export const About = () => {
  return (
    <Container>
      <div>
        <h3>About Firecrest</h3>

        <section style={{ textSizeAdjust: "80" }}>
          {" "}
          Firecrest is an online flight booking system that primarily targets a
          working-class audience between the ages of 25 and 40. <br />
          It allows users to book flights and purchase tickets from a list of
          flights by selecting a departure and arrival point, cabin class, the
          number of passengers, and seat preference for a specific date and
          time. The website will provide a layout of seats on the flight for
          each cabin class (e.g., 01A, 50F). If a seat is occupied, this will be
          indicated by a greyed-out cross in a box.
        </section>
      </div>
    </Container>
  );
};
