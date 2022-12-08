import styled from "@emotion/styled";
import { borderRadius, colors, fontWeight } from "../../../constants/styling";

export const StyledContainer = styled.div``;

export const StyledPostPhoto = styled.img`
  width: 100%;
  height: 220px;
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
