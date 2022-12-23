import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../../types/Post";
import {
  linkStyles,
  StyledDescriptionSpan,
  StyledFeaturedPost,
  StyledFeaturedSpan,
  StyledTitleSpan,
} from "./StyledFeaturedPost";

interface Props {
  post: Post;
  isCurrentSlide: boolean;
}

export const FeaturedPost = ({ post, isCurrentSlide }: Props) => {
  const { id, image, title, shortDesc } = post;
  return (
    <Link to={`post/${id}`} style={linkStyles} state={{ post: post }}>
      <StyledFeaturedPost bgImage={image} isCurrentSlide={isCurrentSlide}>
        <div>
          <StyledFeaturedSpan>FEATURED</StyledFeaturedSpan>
          <StyledTitleSpan>{title}</StyledTitleSpan>
          <StyledDescriptionSpan>{shortDesc}</StyledDescriptionSpan>
        </div>
      </StyledFeaturedPost>
    </Link>
  );
};
