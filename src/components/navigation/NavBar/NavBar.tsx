import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/user/useAuth";
import {
  StyledContainerDiv,
  StyledNavBarDiv,
  StyledNavList,
} from "./StyledNavBar";

export const NavBar = () => {
  const { isAuthenticated, signOut, isAdmin } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <StyledNavBarDiv>
      <StyledContainerDiv>
        <div>
          <span>Logo</span>
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
      </StyledContainerDiv>
    </StyledNavBarDiv>
  );
};
