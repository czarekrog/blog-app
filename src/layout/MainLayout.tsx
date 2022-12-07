import React from "react";
import { FeaturedPosts } from "../components/FeaturedPosts/FeaturedPosts";
import { NavBar } from "../components/navigation/NavBar/NavBar";
import { StyledMainContainer } from "./StyledMainLayout";

export const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <StyledMainContainer>
        <FeaturedPosts />
      </StyledMainContainer>
    </div>
  );
};
