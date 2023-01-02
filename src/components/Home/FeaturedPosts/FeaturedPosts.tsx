import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { selectFeaturedPosts } from "../../../features/postsSlice";
import { FeaturedPost } from "../FeaturedPost/FeaturedPost";
import {
  StyledFeaturedPostsDiv,
  StyledNavigationLeft,
  StyledNavigationRight,
} from "./StyledFeaturedPosts";

export const FeaturedPosts = () => {
  const [navigationVisible, setNavigationVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const posts = useSelector((state: RootState) => selectFeaturedPosts(state));

  const handleMouseEnter = useCallback(() => {
    setNavigationVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setNavigationVisible(false);
  }, []);

  const handlePrevSlide = useCallback(() => {
    if (activeSlide === 0) {
      setActiveSlide(posts.length - 1);
    } else {
      setActiveSlide((prev) => prev - 1);
    }
  }, [activeSlide, posts.length]);

  const handleNextSlide = useCallback(() => {
    if (activeSlide === posts.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide((prev) => prev + 1);
    }
  }, [activeSlide, posts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeSlide, handleNextSlide]);

  return (
    <StyledFeaturedPostsDiv
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {posts.map((post, index) => (
        <FeaturedPost
          key={post.id}
          post={post}
          isCurrentSlide={index === activeSlide}
        />
      ))}
      <StyledNavigationLeft
        visible={navigationVisible}
        onClick={handlePrevSlide}
      >
        &larr;
      </StyledNavigationLeft>
      <StyledNavigationRight
        visible={navigationVisible}
        onClick={handleNextSlide}
      >
        &rarr;
      </StyledNavigationRight>
    </StyledFeaturedPostsDiv>
  );
};
