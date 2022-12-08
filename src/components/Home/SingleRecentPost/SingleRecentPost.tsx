import React from "react";
import {
  StyledContainer,
  StyledPostAuthorAndDateParagraph,
  StyledPostPhoto,
  StyledShortDescParagraph,
  StyledTitleParagraph,
} from "./StyledSingleRecentPost";

interface Props {
  id: string;
  image: string;
  title: string;
  shortDesc: string;
}

export const SingleRecentPost = ({ id, image, title, shortDesc }: Props) => {
  return (
    <StyledContainer>
      <StyledPostPhoto src={image} alt="" />
      <StyledTitleParagraph>{title}</StyledTitleParagraph>
      <StyledShortDescParagraph>{shortDesc}</StyledShortDescParagraph>
      <StyledPostAuthorAndDateParagraph>
        Post Author &#183; Post Date
      </StyledPostAuthorAndDateParagraph>
    </StyledContainer>
  );
};
