import React from "react";
import { NavBar } from "../components/navigation/NavBar/NavBar";
import { StyledMainContainer } from "./StyledMainLayout";
import Home from "../components/Home";

export const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <StyledMainContainer>
        <Home />
      </StyledMainContainer>
    </div>
  );
};
