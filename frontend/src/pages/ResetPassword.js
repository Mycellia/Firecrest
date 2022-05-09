import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth";
import { Container } from "../Styles";
import { Button } from "../components/Button";

const ResetPassword = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <div className="container mt-5">
        <h1>Password Reset Request:</h1>
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
          <Button type="submit">Reset</Button>
        </form>
      </div>
    </Container>
  );
};

export default connect(null, { reset_password })(ResetPassword);
