import React from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "../../components/SignUp/SignUpForm/SignUpForm";
import {
  StyledBottomSection,
  StyledContainer,
  StyledDivider,
  StyledFormContainer,
} from "./StyledSignUp";

export const SignUp = () => {
  return (
    <StyledContainer>
      <StyledFormContainer>
        <h1>Sign Up</h1>
        <SignUpForm />
        <StyledBottomSection>
          <StyledDivider />
          <h2>Already have an account?</h2>
          <Link to="/sign-in" className="sign-in-link">
            Sign In Now!
          </Link>
        </StyledBottomSection>
      </StyledFormContainer>
    </StyledContainer>
  );
};
