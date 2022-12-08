import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../types/Post";
import {
  linkStyles,
  StyledContainer,
  StyledPostAuthorAndDateParagraph,
  StyledPostPhoto,
  StyledShortDescParagraph,
  StyledTitleParagraph,
} from "./StyledSingleRecentPost";

interface Props {
  post: Post;
}

export const SingleRecentPost = ({ post }: Props) => {
  const { id, bgImage, title, shortDesc } = post;
  return (
    <StyledContainer>
      <Link to={`/post/${id}`} style={linkStyles} state={{ post: post }}>
        <StyledPostPhoto src={bgImage} alt="" />
        <StyledTitleParagraph>{title}</StyledTitleParagraph>
        <StyledShortDescParagraph>{shortDesc}</StyledShortDescParagraph>
        <StyledPostAuthorAndDateParagraph>
          Post Author &#183; Post Date
        </StyledPostAuthorAndDateParagraph>
      </Link>
    </StyledContainer>
  );
};
