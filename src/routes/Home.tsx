import React, { useEffect } from "react";
import { FeaturedPosts } from "../components/Home/FeaturedPosts/FeaturedPosts";
import { RecentPosts } from "../components/Home/RecentPosts/RecentPosts";
import { useFetchPosts } from "../hooks/post/useFetchPosts";

export const Home = () => {
  const { fetch } = useFetchPosts();

  useEffect(() => {
    console.log("homepage fetching");
    fetch();
  }, [fetch]);
  return (
    <>
      <FeaturedPosts />
      <RecentPosts />
    </>
  );
};
