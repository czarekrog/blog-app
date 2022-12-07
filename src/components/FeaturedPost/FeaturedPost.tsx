import React from "react";
import {
  StyledDescriptionSpan,
  StyledFeaturedPost,
  StyledFeaturedSpan,
  StyledTitleSpan,
} from "./StyledFeaturedPost";

interface Props {
  bgImage: string;
  title: string;
  shortDesc: string;
  isCurrentSlide: boolean;
}

export const FeaturedPost = ({
  bgImage,
  title,
  shortDesc,
  isCurrentSlide,
}: Props) => {
  return (
    <StyledFeaturedPost bgImage={bgImage} isCurrentSlide={isCurrentSlide}>
      <div>
        <StyledFeaturedSpan>FEATURED</StyledFeaturedSpan>
        <StyledTitleSpan>{title}</StyledTitleSpan>
        <StyledDescriptionSpan>{shortDesc}</StyledDescriptionSpan>
      </div>
    </StyledFeaturedPost>
  );
};
