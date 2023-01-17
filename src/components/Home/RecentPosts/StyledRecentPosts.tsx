import styled from "@emotion/styled";
import { breakpoints, fontWeight } from "../../../constants/styling";

export const StyledContainer = styled.div`
  padding: 16px;
`;

export const StyledPostsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const StyledHeader = styled.h2`
  font-size: 20px;
  font-weight: ${fontWeight.medium};
`;
