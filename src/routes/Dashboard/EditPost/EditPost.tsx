import React from "react";
import { useLocation } from "react-router-dom";
import {
  FormType,
  PostForm,
} from "../../../components/Dashboard/PostForm/PostForm";
import { StyledContainer, StyledFormContainer } from "./StyledEditPost";

export const EditPost = () => {
  const location = useLocation();
  const { post } = location.state;
  return (
    <StyledContainer>
      <StyledFormContainer>
        <h1>Edit Post</h1>
        <PostForm
          type={FormType.edit}
          id={post.id}
          image={post.image}
          tags={post.tags}
          title={post.title}
          shortDesc={post.shortDesc}
          content={post.content}
          featured={post.featured}
        />
      </StyledFormContainer>
    </StyledContainer>
  );
};
