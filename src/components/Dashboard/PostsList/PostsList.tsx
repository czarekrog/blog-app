import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { selectPosts } from "../../../features/postsSlice";
import { PostsListItem } from "../PostsListItem/PostsListItem";

export const PostsList = () => {
  const posts = useSelector((state: RootState) => selectPosts(state));

  const renderPosts = () => {
    return posts.map((post) => <PostsListItem key={post.id} post={post} />);
  };
  return <div>{renderPosts()}</div>;
};
