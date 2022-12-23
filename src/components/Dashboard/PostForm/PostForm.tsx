import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { PostImage } from "./PostImage/PostImage";
import { StyledContainer } from "./StyledPostForm";

const PostFormSchema = Yup.object().shape({
  title: Yup.string().required("This fiels is required"),
  tags: Yup.string().required("This fiels is required"),
  shortDesc: Yup.string().required("This fiels is required"),
  content: Yup.string().required("This fiels is required"),
});

export enum FormType {
  add,
  edit,
}

interface PostFormProps {
  type: FormType;
  id?: string;
  image?: string;
  title?: string;
  tags?: string;
  shortDesc?: string;
  content?: string;
}

interface AddEditPostProps {
  image: string;
  title: string;
  tags: string;
  shortDesc: string;
  content: string;
}

export const PostForm = ({
  type,
  id,
  image,
  title,
  tags,
  shortDesc,
  content,
}: PostFormProps) => {
  const [postImage, setPostImage] = useState(image);

  const handleAddPost = ({
    image,
    title,
    tags,
    shortDesc,
    content,
  }: AddEditPostProps) => {
    console.log("Add post");
  };

  const handleEditPost = ({
    image,
    title,
    tags,
    shortDesc,
    content,
  }: AddEditPostProps) => {
    console.log("Edit Post: " + id);
  };

  return (
    <StyledContainer>
      {postImage && <PostImage src={postImage} setPostImage={setPostImage} />}

      <Formik
        initialValues={{
          image: "",
          title: title || "",
          tags: tags || "",
          shortDesc: shortDesc || "",
          content: content || "",
        }}
        validationSchema={PostFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          type === FormType.add &&
            handleAddPost({
              image: values.image,
              title: values.title,
              tags: values.tags,
              shortDesc: values.shortDesc,
              content: values.content,
            });
          type === FormType.edit &&
            handleEditPost({
              image: values.image,
              title: values.title,
              tags: values.tags,
              shortDesc: values.shortDesc,
              content: values.shortDesc,
            });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {!postImage && <Field type="file" name="image" />}
            <label>Title</label>
            <Field type="text" name="title" placeholder="Post title" />
            <ErrorMessage
              name="title"
              component="p"
              className="error-message"
            />
            <label>Tags</label>
            <Field type="text" name="tags" placeholder="Tags" />
            <ErrorMessage name="tags" component="p" className="error-message" />
            <label>Short Description</label>
            <Field
              as="textarea"
              type="text"
              name="shortDesc"
              placeholder="Short description..."
              className="shortDescription"
            />
            <ErrorMessage
              name="shortDesc"
              component="p"
              className="error-message"
            />
            <label>Content</label>
            <Field
              as="textarea"
              name="content"
              placeholder="Post content..."
              className="content"
            />
            <ErrorMessage
              name="content"
              component="p"
              className="error-message"
            />
            <button type="submit" disabled={isSubmitting}>
              {type === FormType.add && "Add post"}
              {type === FormType.edit && "Save changes"}
            </button>
          </Form>
        )}
      </Formik>
    </StyledContainer>
  );
};
