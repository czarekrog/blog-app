import React from "react";
import { Link } from "react-router-dom";
import {
  StyledContainerDiv,
  StyledNavBarDiv,
  StyledNavList,
} from "./StyledNavBar";

export const NavBar = () => {
  return (
    <StyledNavBarDiv>
      <StyledContainerDiv>
        <div>
          <span>Logo</span>
        </div>
        <div>
          <StyledNavList>
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
            <li>
              <Link to="/sign-in">Sign in</Link>
            </li>
            <li>
              <Link to="/sign-up" className="signUpButton">
                Sign Up
              </Link>
            </li>
          </StyledNavList>
        </div>
      </StyledContainerDiv>
    </StyledNavBarDiv>
  );
};
