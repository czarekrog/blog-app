import React from "react";
import { Link } from "react-router-dom";
import { SignInForm } from "../../components/SignIn/SignInForm/SignInForm";
import {
  StyledBottomSection,
  StyledContainer,
  StyledDivider,
  StyledFormContainer,
} from "./StyledSignIn";

export const SignIn = () => {
  return (
    <StyledContainer>
      <StyledFormContainer>
        <h1>Sign In</h1>
        <SignInForm />
        <StyledBottomSection>
          <Link to="/forgot-password">Forgot password? Reset Now!</Link>
          <StyledDivider />
          <h2>Don't have an account?</h2>
          <Link to="/sign-up" className="new-account-link">
            Create new account now!
          </Link>
        </StyledBottomSection>
      </StyledFormContainer>
    </StyledContainer>
  );
};
