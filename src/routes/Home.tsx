import React from "react";
import { FeaturedPosts } from "../components/Home/FeaturedPosts/FeaturedPosts";
import { RecentPosts } from "../components/Home/RecentPosts/RecentPosts";

export const Home = () => {
  return (
    <>
      <FeaturedPosts />
      <RecentPosts />
    </>
  );
};
