import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpForm } from "../../components/SignUp/SignUpForm/SignUpForm";
import { useAuth } from "../../hooks/user/useAuth";
import {
  StyledBottomSection,
  StyledContainer,
  StyledDivider,
  StyledFormContainer,
} from "./StyledSignUp";

export const SignUp = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

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
