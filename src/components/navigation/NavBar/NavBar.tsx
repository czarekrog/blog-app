import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/user/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  StyledContainerDiv,
  StyledLogo,
  StyledLogoSection,
  StyledNavBarDiv,
  StyledNavigationSection,
  StyledNavList,
} from "./StyledNavBar";

export const NavBar = () => {
  const { isAuthenticated, signOut, isAdmin } = useAuth();
  const location = useLocation();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  const handleMenuToggle = () => {
    const navSection = document.getElementById("navSection");
    navSection?.classList.contains("opened")
      ? navSection?.classList.remove("opened")
      : navSection?.classList.add("opened");
  };

  //closing mobile menu after location change
  useEffect(() => {
    const navSection = document.getElementById("navSection");
    navSection?.classList.remove("opened");
  }, [location]);

  return (
    <StyledNavBarDiv>
      <StyledContainerDiv>
        <StyledLogoSection>
          <Link to="/">
            <StyledLogo
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Blog logo"
            />
          </Link>
          <FontAwesomeIcon icon={faBars} onClick={handleMenuToggle} />
        </StyledLogoSection>
        <StyledNavigationSection id="navSection">
          <StyledNavList className="mainNavigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </StyledNavList>
          <StyledNavList className="userNavigation">
            {!isAuthenticated ? (
              <>
                <li>
                  <Link to="/sign-in">Sign in</Link>
                </li>
                <li>
                  <Link to="/sign-up" className="signUpButton">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                {isAdmin && (
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                )}
                <li className="signOut" onClick={handleSignOut}>
                  Sign Out
                </li>
              </>
            )}
          </StyledNavList>
        </StyledNavigationSection>
      </StyledContainerDiv>
    </StyledNavBarDiv>
  );
};
