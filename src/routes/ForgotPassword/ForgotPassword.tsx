import { Alert } from "../../components/Alert/Alert";
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
        {/* We want to show only the success message that the form has been submitted to make it impossible to check if i.e. our friend has an account registered in the service by entering his email. */}
        <Alert />
        <ForgotPasswordForm />
      </StyledFormContainer>
    </StyledContainer>
  );
};
