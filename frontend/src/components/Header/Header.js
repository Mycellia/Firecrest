import React, { Fragment, useState } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { Button } from "../../components/Header/Header";
import "./Header.css";

const Header = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };

  const guestLinks = () => (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Sign Up
        </Link>
      </li>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link " to="/book">
          Book
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="contact-us">
          Contact Us
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!" onClick={logout_user}>
          Logout
        </a>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
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
              {isAuthenticated ? authLinks() : guestLinks()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {redirect ? <Navigate to="/" /> : <Fragment></Fragment>}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
