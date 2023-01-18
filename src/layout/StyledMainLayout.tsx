import styled from "@emotion/styled";
import { sizes } from "../constants/styling";

export const StyledMainLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledMainContainer = styled.div`
  /* Moving the container from under the navbar with margin top equal to navbar height */
  margin-top: ${sizes.navbarHeight};
  width: ${sizes.mainContainerWidth};
  max-width: ${sizes.mainContainerMaxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  box-sizing: border-box;
`;
