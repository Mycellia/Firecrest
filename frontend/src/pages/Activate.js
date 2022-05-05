import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";
import { FormButton } from "./Contact/ContactStyles";
import { Container } from "../Styles";

const Activate = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);
  const verify_account = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };
  if (verified) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <div className="container mt-5">
        <div
          className="d-flex flex-column justify-content-center align-items-center
        "
          style={{ marginTop: "200px" }}
        >
          <h1>Account Verification</h1>
          <FormButton onClick={verify_account} type="button">
            Verify
          </FormButton>
        </div>
      </div>
    </Container>
  );
};

export default connect(null, { verify })(Activate);
