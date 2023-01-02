import moment from "moment";
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
  const { id, image, title, shortDesc, author, date } = post;
  return (
    <StyledContainer>
      <Link to={`/post/${id}`} style={linkStyles} state={{ post: post }}>
        <StyledPostPhoto src={image} alt="" />
        <StyledTitleParagraph>{title}</StyledTitleParagraph>
        <StyledShortDescParagraph>{shortDesc}</StyledShortDescParagraph>
        <StyledPostAuthorAndDateParagraph>
          <>
            {author} &#183; {moment(date).format("DD.MM.YYYY")}
          </>
        </StyledPostAuthorAndDateParagraph>
      </Link>
    </StyledContainer>
  );
};
