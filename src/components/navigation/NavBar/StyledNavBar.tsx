import styled from "@emotion/styled";

import {
  borderRadius,
  breakpoints,
  colors,
  fontSize,
  fontWeight,
  sizes,
  spacing,
} from "../../../constants/styling";

export const StyledNavBarDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: ${sizes.navbarHeight};
  background-color: #fff;
  color: ${colors.text};
  z-index: 100;
`;

export const StyledContainerDiv = styled.div`
  height: inherit;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${spacing.large};
  padding-right: ${spacing.large};
  width: ${sizes.mainContainerWidth};
  max-width: ${sizes.mainContainerMaxWidth};
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    width: auto;
    align-items: stretch;
  }

  .fa-bars {
    font-size: 24px;
    display: none;
    @media (max-width: ${breakpoints.mobile}) {
      display: block;
    }
  }
`;

export const StyledLogoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.img`
  height: 45px;
`;

export const StyledNavigationSection = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  transition: opacity 0.3s;
  @media (max-width: ${breakpoints.mobile}) {
    opacity: 0;
    flex-direction: column;
    background-color: white;
    align-items: center;
    visibility: hidden;
  }
  &.opened {
    opacity: 1;
    visibility: visible;
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  & > li {
    float: left;
  }
  & > li {
    & > a {
      display: block;
      color: ${colors.text};
      text-align: center;
      padding: 15px 24px;
      text-decoration: none;
      font-size: ${fontSize.regular};
      font-weight: ${fontWeight.medium};
    }
    & > a:hover {
      text-decoration: underline;
    }
    & > a.signUpButton {
      margin-top: 7px;
      padding: 8px 24px;
      background-color: ${colors.primary};
      color: ${colors.textBright};
      border-radius: ${borderRadius.medium};
      font-weight: bold;
    }
    & > a.signUpButton:hover {
      background-color: ${colors.primaryBrighter};
      text-decoration: none;
    }
  }

  &.mainNavigation {
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: ${breakpoints.mobile}) {
      flex-direction: column;
    }
  }

  &.userNavigation {
    display: flex;
    justify-content: end;
  }

  .signOut {
    cursor: pointer;
    padding: 15px 12px;
  }

  .signOut:hover {
    text-decoration: underline;
  }
`;
