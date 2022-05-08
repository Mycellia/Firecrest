import React from "react";
import { Form } from "react-bootstrap";
import "./Home.css";
import Hero from "../components/Hero/Hero";
import { Button } from "../components/Button";

export const Home = () => {
  return (
    <>
      <Hero />
      <Form className="back">
        <div class="wrapper bg-white">
          <form action="#">
            <div class="form-group border-bottom d-flex align-items-center justify-content-between flex-wrap">
              {" "}
              <label class="option my-sm-0 my-2">
                {" "}
                <input type="radio" name="radio" checked />
                Round Trip <span class="checkmark"></span>{" "}
              </label>{" "}
              <label class="option my-sm-0 my-2">
                {" "}
                <input type="radio" name="radio" />
                One Way <span class="checkmark"></span>{" "}
              </label>
              <div class="d-flex align-items-center my-sm-0 my-2">
                {" "}
                <a href="#" class="text-decoration-none">
                  {" "}
                  Multi-city/Stopovers{" "}
                  <span class="fas fa-angle-right ps-2 text-primary"></span>{" "}
                </a>{" "}
              </div>
            </div>
            <div class="form-group d-sm-flex margin">
              <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                {" "}
                <input
                  type="text"
                  required
                  placeholder="Departure"
                  class="form-control"
                />
                <div class="label" id="Departure"></div>{" "}
                <span class="fas fa-dot-circle text-muted"></span>
              </div>
              <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                {" "}
                <input
                  type="text"
                  required
                  placeholder="Destination"
                  class="form-control"
                />
                <div class="label" id="Destination"></div>{" "}
                <span class="fas fa-map-marker text-muted"></span>
              </div>
            </div>
            <div class="form-group d-sm-flex margin">
              <div class="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                {" "}
                <input
                  type="date"
                  required
                  placeholder="Departure Date"
                  class="form-control"
                />
                <div class="label" id="depart"></div>
              </div>
              <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                {" "}
                <input
                  type="date"
                  required
                  placeholder="Return Date"
                  class="form-control"
                />
                <div class="label" id="return"></div>
              </div>
            </div>

            <div class="form-group d-sm-flex margin">
              <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                {" "}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control
                    as="select"
                    name="numOfPassengers"
                    placeholder="Number of Passengers"
                  >
                    <option>Passenger</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </div>

              <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                {" "}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control as="select" name="Class" placeholder="Class">
                    <option>Class</option>
                    <option>First</option>
                    <option>Business</option>
                    <option>Premium Economy</option>
                    <option>Economy</option>
                  </Form.Control>
                </Form.Group>
              </div>

              <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                {" "}
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Control
                    as="select"
                    name="Airlines"
                    placeholder="Airlines"
                  >
                    <option>Airlines</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>{" "}
              </div>
            </div>

            <div class="form-group my-3">
              <Button> Find Flights</Button>
            </div>
          </form>
        </div>
      </Form>
    </>
  );
};
