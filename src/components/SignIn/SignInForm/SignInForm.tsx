import { useFormik } from "formik";
import { useSignIn } from "../../../hooks/user/useSignIn";
import { StyledSignInFormContainer } from "./StyledSignInForm";

export const SignInForm = () => {
  const { signIn } = useSignIn();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signIn({ email: values.email, password: values.password });
    },
  });
  return (
    <StyledSignInFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Sign In</button>
      </form>
    </StyledSignInFormContainer>
  );
};
