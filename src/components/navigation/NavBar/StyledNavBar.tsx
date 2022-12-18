import styled from "@emotion/styled";

import {
  borderRadius,
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
  & > div {
    flex: 1;
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
  }

  &.userNavigation {
    display: flex;
    justify-content: end;
  }

  .signOut {
    cursor: pointer;
  }

  .signOut:hover {
    text-decoration: underline;
  }
`;
