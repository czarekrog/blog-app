import React from "react";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { StyledContainer, StyledFormContainer } from "./StyledContact";

export const Contact = () => {
  return (
    <StyledContainer>
      <StyledFormContainer>
        <h1>Contact</h1>
        <span>
          If you have any question, we are here ready to answer them. Fill the
          form below and we will reply as soon as possible.
        </span>
        <ContactForm />
      </StyledFormContainer>
    </StyledContainer>
  );
};
