import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="color-nav" expand="lg">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="link" as={Link} to="/book">
              Book
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="link" as={Link} to="/contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav.Link className="link" as={Link} to="/login">
            <Button className="button" variant="outline-success">
              Sign In
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
