import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navigation/NavBar/NavBar";
import { StyledMainContainer } from "./StyledMainLayout";

export const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <StyledMainContainer>
        <Outlet />
      </StyledMainContainer>
    </div>
  );
};
