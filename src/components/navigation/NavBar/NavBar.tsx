import React from "react";
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </StyledNavList>
        </div>
        <div>
          <StyledNavList className="userNavigation">
            <li>
              <a href="/">Sign in</a>
            </li>
            <li>
              <a className="signUpButton" href="/">
                Sign Up
              </a>
            </li>
          </StyledNavList>
        </div>
      </StyledContainerDiv>
    </StyledNavBarDiv>
  );
};
