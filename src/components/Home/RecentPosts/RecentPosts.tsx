import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useFetchPosts } from "../../../hooks/post/useFetchPosts";
import { SingleRecentPost } from "../SingleRecentPost/SingleRecentPost";
import {
  StyledContainer,
  StyledHeader,
  StyledPostsList,
} from "./StyledRecentPosts";

export const RecentPosts = () => {
  const { postsLoading } = useFetchPosts();
  const posts = useSelector((state: RootState) => state.posts.posts);

  const renderRecentPosts = () => {
    return (
      <>
        {posts.map((post) => (
          <SingleRecentPost key={post.id} post={post} />
        ))}
      </>
    );
  };

  return (
    <StyledContainer>
      <StyledHeader>Recent blog posts</StyledHeader>
      {postsLoading && <p>Loading posts...</p>}
      <StyledPostsList>{renderRecentPosts()}</StyledPostsList>
    </StyledContainer>
  );
};
