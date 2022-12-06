import styled from "@emotion/styled";

import {
  bordeRadius,
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
  height: 50px;
  background-color: ${colors.primary};
  color: ${colors.textBright};
`;

export const StyledContainerDiv = styled.div`
  height: inherit;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${spacing.spacingLarge};
  padding-right: ${spacing.spacingLarge};
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
      color: ${colors.textBright};
      text-align: center;
      padding: 15px 24px;
      text-decoration: none;
      font-size: ${fontSize.regular};
      font-weight: ${fontWeight.medium};
    }
    & > a:hover {
      background-color: ${colors.primaryBrighter};
    }
    & > a.signUpButton {
      margin-top: 7px;
      padding: 8px 24px;
      background-color: ${colors.light};
      color: ${colors.primary};
      border-radius: ${bordeRadius.medium};
      font-weight: bold;
    }
    & > a.signUpButton:hover {
      filter: brightness(1.3);
    }
  }
  &.userNavigation {
    display: flex;
    justify-content: end;
  }
`;
