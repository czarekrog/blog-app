import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/navigation/NavBar/NavBar";
import { StyledMainContainer, StyledMainLayout } from "./StyledMainLayout";

export const MainLayout = () => {
  return (
    <StyledMainLayout>
      <NavBar />
      <StyledMainContainer>
        <Outlet />
      </StyledMainContainer>
      <Footer />
    </StyledMainLayout>
  );
};
