import React from "react";
import { useFormik } from "formik";
import { StyledForgotPasswordFormContainer } from "./StyledForgotPasswordForm";

export const ForgotPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
