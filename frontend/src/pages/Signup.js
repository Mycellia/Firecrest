import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import { Container } from "../Styles";
import { FormButton } from "./Contact/ContactStyles";
import { Button } from "../components/Header/HeaderStyle";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    re_password: "",
    phone: "",
    passport_number: "",
  });

  const { email, name, password, re_password, phone, passport_number } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(email, name, password, re_password, phone, passport_number);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (accountCreated) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <div className="container mt-5">
        <h1>Sign Up</h1>
        <p>Create an Account</p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="First Name and Last Name*"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email*"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Phone Number*"
              name="phone"
              value={phone}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Passport Number*"
              name="passport_number"
              value={passport_number}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password*"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Confirm Password*"
              name="re_password"
              value={re_password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
          </div>

          <Button type="submit">Create</Button>
        </form>

        <p className="mt-3">
          Do you already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
