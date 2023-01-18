import styled from "@emotion/styled";
import { colors } from "../../constants/styling";

export const StyledContainer = styled.div`
  margin-top: auto;
  background-color: ${colors.primary};
  color: ${colors.textBright};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCopyrightParagraph = styled.p`
  font-size: 16px;
  margin: 0;
`;
