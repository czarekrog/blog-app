import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSignUp } from "../../../hooks/user/useSignUp";
import { StyledSignUpFormContainer } from "./StyledSignUpForm";
import * as Yup from "yup";
import { Alert } from "../../Alert/Alert";

const SignUpFormSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is to short").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password shoult have at least 8 characters")
    .required("Password is required"),
  password2: Yup.string()
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
    })
    .required("Confirm password is required"),
});

export const SignUpForm = () => {
  const { signUp } = useSignUp();
  return (
    <StyledSignUpFormContainer>
      <Alert />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
          termsAndConditions: false,
        }}
        validationSchema={SignUpFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          signUp({
            email: values.email,
            password: values.password,
            name: values.name,
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Nick</label>
            <Field type="text" name="name" placeholder="yourNick123" />
            <ErrorMessage name="name" component="p" className="error-message" />
            <label>Email</label>
            <Field type="email" name="email" placeholder="your@emailcom" />
            <ErrorMessage
              name="email"
              component="p"
              className="error-message"
            />
            <label>Password</label>
            <Field type="password" name="password" placeholder="•••••••••••" />
            <ErrorMessage
              name="password"
              component="p"
              className="error-message"
            />
            <label>Repeat password</label>
            <Field type="password" name="password2" placeholder="•••••••••••" />
            <ErrorMessage
              name="password2"
              component="p"
              className="error-message"
            />
            <button type="submit" disabled={isSubmitting}>
              Register Account
            </button>
          </Form>
        )}
      </Formik>
    </StyledSignUpFormContainer>
  );
};
