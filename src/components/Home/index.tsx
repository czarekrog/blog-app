import React from "react";
import { FeaturedPosts } from "./FeaturedPosts/FeaturedPosts";
import { RecentPosts } from "./RecentPosts/RecentPosts";

const Home = () => {
  return (
    <>
      <FeaturedPosts />
      <RecentPosts />
    </>
  );
};

export default Home;
