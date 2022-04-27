import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { setAlert } from "../actions/alert";
import { signup } from "../actions/auth";
import { ReactPropTypes } from "react";
import { FormButton } from "./Contact/ContactStyles";
import { Container } from "../globalStyles";

export const Signup = (setAlert, signup, isAuthenticated) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, re_password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== re_password) {
      setAlert("Passwords aren't a match");
    } else {
      signup({ name, email, password, re_password });
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
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
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
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
              placeholder="Re-type Password"
              name="re_password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
              required
            />
          </div>
          <FormButton type="submit">Create Account</FormButton>
        </form>

        <p className="mt-3">
          Already have an Account ? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </Container>
  );
};
