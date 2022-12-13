import { ForgotPasswordForm } from "../../components/ForgotPassword/ForgotPasswordForm/ForgotPasswordForm";
import { StyledContainer, StyledFormContainer } from "./StyledForgotPassword";

export const ForgotPassword = () => {
  return (
    <StyledContainer>
      <StyledFormContainer>
        <h1>Forgot Password?</h1>
        <p>
          Enter your email below, and if we find it in our database, we will
          send you a link.
        </p>
        <ForgotPasswordForm />
      </StyledFormContainer>
    </StyledContainer>
  );
};
