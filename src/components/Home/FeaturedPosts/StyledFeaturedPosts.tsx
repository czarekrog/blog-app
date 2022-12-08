import styled from "@emotion/styled";
import { borderRadius, colors } from "../../../constants/styling";

interface NavigationProps {
  visible: boolean;
}

export const StyledFeaturedPostsDiv = styled.div`
  width: 100%;
  border-radius: ${borderRadius.big};
  box-sizing: border-box;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  height: 600px;
  overflow: hidden;
  position: relative;
`;

export const StyledNavigationLeft = styled.div<NavigationProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 80px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.light};
  font-size: 40px;
  transition: width 0.5s, font-size 0.5s, opacity 0.5s;
  &:hover {
    font-size: 50px;
    width: 100px;
  }
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 100 : 0)};
  /* REMOVING BLUE HIGHLIGHT ON DOUBLE CLICK */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

export const StyledNavigationRight = styled.div<NavigationProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 80px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.light};
  font-size: 40px;
  transition: width 0.5s, font-size 0.5s, opacity 0.5s;
  &:hover {
    font-size: 50px;
    width: 100px;
  }
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 100 : 0)};
  /* REMOVING BLUE HIGHLIGHT ON DOUBLE CLICK */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;
