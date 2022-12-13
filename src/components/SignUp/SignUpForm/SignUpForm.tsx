import { useFormik } from "formik";
import { StyledSignUpFormContainer } from "./StyledSignUpForm";

export const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      termsAndConditions: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledSignUpFormContainer>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
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
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
        />
        <input
          id="repeatPtermsAndConditionsassword"
          name="termsAndConditions"
          type="checkbox"
          onChange={formik.handleChange}
          checked={formik.values.termsAndConditions}
        />
        I accept terms and conditions
        <button type="submit">Register Account</button>
      </form>
    </StyledSignUpFormContainer>
  );
};
