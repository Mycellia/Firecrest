import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { FormButton } from "./Contact/ContactStyles";
import { Container } from "../Styles";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <div className="container mt-5">
        <h1>Sign In</h1>
        <p>Sign into your account</p>
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
          <FormButton type="submit">Sign In</FormButton>
        </form>
        <p className="mt-3">
          {/* Already have an Account ? <Link to="/login">Sign in</Link> */}
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="mt-3">
          Forgot your Password? <Link to="/reset-password">Reset Password</Link>
        </p>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(null, { login })(Login);
