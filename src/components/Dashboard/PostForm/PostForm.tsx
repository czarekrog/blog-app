import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { PostImage } from "./PostImage/PostImage";
import { StyledContainer } from "./StyledPostForm";
import { useCreatePost } from "../../../hooks/post/useCreatePost";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { useRemovePost } from "../../../hooks/post/useRemovePost";
import { useEditPost } from "../../../hooks/post/useEditPost";

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
  featured?: boolean;
}

export const PostForm = ({
  type,
  id,
  image,
  title,
  tags,
  shortDesc,
  content,
  featured,
}: PostFormProps) => {
  const { createNewPost, uploadProgress } = useCreatePost();
  const { remove } = useRemovePost();
  const { editPost } = useEditPost();

  const [postImage, setPostImage] = useState(image);

  return (
    <StyledContainer>
      {postImage && <PostImage src={postImage} setPostImage={setPostImage} />}

      <Formik
        initialValues={{
          image: null,
          title: title || "",
          tags: tags || "",
          shortDesc: shortDesc || "",
          content: content || "",
          featured: featured || false,
        }}
        validationSchema={PostFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          type === FormType.add &&
            createNewPost({
              image: values.image,
              title: values.title,
              tags: values.tags,
              shortDesc: values.shortDesc,
              content: values.content,
              featured: values.featured,
            });
          type === FormType.edit && editPost();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            {!postImage && (
              <input
                type="file"
                name="image"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (!e.currentTarget.files) return;
                  setPostImage(URL.createObjectURL(e.currentTarget.files[0]));
                  setFieldValue("image", e.currentTarget.files[0]);
                }}
              />
            )}
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
            {uploadProgress > 0 && <ProgressBar progress={uploadProgress} />}
            <button type="submit" disabled={uploadProgress > 0 || isSubmitting}>
              {type === FormType.add && "Add post"}
              {type === FormType.edit && "Save changes"}
            </button>
          </Form>
        )}
      </Formik>
    </StyledContainer>
  );
};
