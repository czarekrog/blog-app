import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { SingleRecentPost } from "../SingleRecentPost/SingleRecentPost";
import {
  StyledContainer,
  StyledHeader,
  StyledPostsList,
} from "./StyledRecentPosts";

export const RecentPosts = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  const renderRecentPosts = () => {
    return (
      <>
        {posts.map((post) => (
          <SingleRecentPost
            key={post.id}
            id={post.id}
            image={post.bgImage}
            title={post.title}
            shortDesc={post.shortDesc}
          />
        ))}
      </>
    );
  };
  return (
    <StyledContainer>
      <StyledHeader>Recent blog posts</StyledHeader>
      <StyledPostsList>{renderRecentPosts()}</StyledPostsList>
    </StyledContainer>
  );
};
