import styled from "@emotion/styled";
import {
  borderRadius,
  breakpoints,
  colors,
  fontWeight,
} from "../../../constants/styling";

export const linkStyles = {
  color: `${colors.primary}`,
  textDecoration: "none",
};

export const StyledContainer = styled.div`
  width: 100%;
  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }
`;

export const StyledPostPhoto = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: ${borderRadius.medium};
`;

export const StyledTitleParagraph = styled.p`
  font-size: 20px;
  font-weight: ${fontWeight.bold};
  margin-bottom: 8px;
`;

export const StyledShortDescParagraph = styled.p`
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const StyledPostAuthorAndDateParagraph = styled.p`
  font-size: 14px;
  font-weight: ${fontWeight.medium};
`;
