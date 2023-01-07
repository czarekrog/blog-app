import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useEditPost } from "../../../hooks/post/useEditPost";
import { StyledContainer, StyledHeader } from "./StyledAddComment";

interface Props {
  postId: string;
}

const CommentFormSchema = Yup.object().shape({
  comment: Yup.string().required("This fiels is required"),
});

export const AddComment = ({ postId }: Props) => {
  const { commentPost } = useEditPost();
  return (
    <StyledContainer>
      <StyledHeader>Add new comment</StyledHeader>
      <Formik
        initialValues={{ comment: "" }}
        validationSchema={CommentFormSchema}
        onSubmit={(values, { setSubmitting, setFieldValue }) => {
          setSubmitting(true);
          commentPost({ comment: values.comment, postId: postId });
          setFieldValue("comment", "", false);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              as="textarea"
              name="comment"
              placeholder="Enter your comment here..."
            />
            <ErrorMessage
              name="comment"
              component="p"
              className="error-message"
            />
            <button type="submit" disabled={isSubmitting}>
              Add comment
            </button>
          </Form>
        )}
      </Formik>
    </StyledContainer>
  );
};
