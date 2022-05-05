import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "../../components/Header/HeaderStyle";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* <Navbar
        collapseOnSelect
        className="color-nav"
        expand="lg"
        style={{ zindex: 2 }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/assets/Firecrest-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Firecrest
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className="link"
                as={Link}
                to="/book"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                Book
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/contact-us">
                Contact Us
              </Nav.Link>
            </Nav>

            <Nav className="d-flex">
              <Link to="/login">
                <Button>Sign In</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar collapseOnSelect className="color-nav" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/assets/Firecrest-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Firecrest
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="book">Book</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="contact-us">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="login">
                {" "}
                <Button>Sign In</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
