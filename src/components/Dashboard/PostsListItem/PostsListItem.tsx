import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../types/Post";
import {
  StyledContainer,
  StyledDescription,
  StyledNavigation,
  StyledShortContent,
  StyledTitle,
} from "./StyledPostsListItem";

interface Props {
  post: Post;
}

export const PostsListItem = ({ post }: Props) => {
  const { id, image, title, shortDesc } = post;
  return (
    <StyledContainer>
      <img src={image} alt="Post cover" />
      <StyledShortContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{shortDesc}</StyledDescription>
      </StyledShortContent>
      <StyledNavigation>
        <Link to={`edit/${id}`} state={{ post }}>
          Edit
        </Link>
      </StyledNavigation>
    </StyledContainer>
  );
};
