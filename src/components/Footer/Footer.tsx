import React from "react";
import { StyledContainer, StyledCopyrightParagraph } from "./StyledFooter";
import moment from "moment";

export const Footer = () => {
  return (
    <StyledContainer>
      <StyledCopyrightParagraph>
        Copyright &#169; Productivity Blog - {moment().format("YYYY")}
      </StyledCopyrightParagraph>
    </StyledContainer>
  );
};
