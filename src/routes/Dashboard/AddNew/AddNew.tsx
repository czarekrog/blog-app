import React from "react";
import {
  FormType,
  PostForm,
} from "../../../components/Dashboard/PostForm/PostForm";
import { StyledContainer, StyledFormContainer } from "./StyledAddNew";

export const AddNew = () => {
  return (
    <StyledContainer>
      <StyledFormContainer>
        <h2>Add new post</h2>
        <PostForm type={FormType.add} />
      </StyledFormContainer>
    </StyledContainer>
  );
};
