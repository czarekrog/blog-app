import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSignIn } from "../../../hooks/user/useSignIn";
import { StyledSignInFormContainer } from "./StyledSignInForm";
import * as Yup from "yup";
import { Alert } from "../../Alert/Alert";

const SignInFormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password field cannot be empty"),
});

export const SignInForm = () => {
  const { signIn } = useSignIn();
  return (
    <StyledSignInFormContainer>
      <Alert />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          signIn({
            email: values.email,
            password: values.password,
          });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
            <button type="submit" disabled={isSubmitting}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </StyledSignInFormContainer>
  );
};
