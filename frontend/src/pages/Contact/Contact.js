import React, { useState } from "react";

import { Container } from "../../Styles";
import {
  FormButton,
  FormColumn,
  FormInput,
  FormInputRow,
  FormLabel,
  FormMessage,
  FormRow,
  FormSection,
  FormTitle,
  FormWrapper,
} from "./ContactStyles";
import validateForm from "./validateForm";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const resultError = validateForm({ name, email, message });

    // if (resultError !== null) {
    //   setError(resultError);
    //   return;
    // }
    // setName("");
    // setEmail("");
    // setMessage("");
    // setConfirmPass("");
    // setError(null);
    // setSuccess("Application was submitted!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    {
      label: "Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Message",
      value: message,
      onChange: (e) => setMessage(e.target.value),
      type: "text",
    },
  ];
  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Contact Us</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Please fill`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton style={{ width: "100%" }} type="submit">
                Send
              </FormButton>
            </FormWrapper>
            {/* {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )} */}
            {/* {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )} */}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};
