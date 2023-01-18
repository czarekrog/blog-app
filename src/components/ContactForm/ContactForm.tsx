import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { StyledContainer, StyledUserAnnouncement } from "./StyledContactForm";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export const ContactForm = () => {
  const [userAnnouncement, setUserAnnouncement] = useState<string>("");
  return (
    <StyledContainer>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          //Here normally would do a call to email API
          setUserAnnouncement("Message has been sent!");
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <StyledUserAnnouncement>{userAnnouncement}</StyledUserAnnouncement>
            <label>Name</label>
            <Field type="text" name="name" placeholder="Your name" />
            <ErrorMessage name="name" component="p" className="error-message" />
            <label>Email</label>
            <Field type="email" name="email" placeholder="your@emailcom" />
            <ErrorMessage
              name="email"
              component="p"
              className="error-message"
            />
            <label>Subject</label>
            <Field type="text" name="subject" placeholder="Subject..." />
            <ErrorMessage
              name="subject"
              component="p"
              className="error-message"
            />
            <label>Message</label>
            <Field
              as="textarea"
              name="message"
              placeholder="Your message here..."
            />
            <ErrorMessage
              name="message"
              component="p"
              className="error-message"
            />
            <button type="submit" disabled={isSubmitting}>
              Send message
            </button>
          </Form>
        )}
      </Formik>
    </StyledContainer>
  );
};
