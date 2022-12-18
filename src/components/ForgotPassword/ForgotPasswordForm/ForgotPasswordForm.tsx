import React from "react";
import { useFormik } from "formik";
import { StyledForgotPasswordFormContainer } from "./StyledForgotPasswordForm";
import { useResetPassword } from "../../../hooks/user/useResetPassword";

export const ForgotPasswordForm = () => {
  const { resetPassword } = useResetPassword();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      resetPassword({ email: values.email });
    },
  });
  return (
    <StyledForgotPasswordFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    </StyledForgotPasswordFormContainer>
  );
};
