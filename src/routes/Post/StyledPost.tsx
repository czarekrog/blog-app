import styled from "@emotion/styled";
import { url } from "inspector";
import { borderRadius, colors, fontWeight } from "../../constants/styling";

interface StyledHeadingProps {
  bgImage: string;
}

export const StyledContainer = styled.div`
  padding: 16px;
`;

export const StyledHeading = styled.div<StyledHeadingProps>`
  background: url(${(props) => props.bgImage}) rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
  color: ${colors.light};
  width: 100%;
  border-radius: ${borderRadius.medium};
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: ${fontWeight.bold};
  margin-bottom: 16px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
`;

export const StyledAuthorAndDate = styled.span`
  font-size: 16px;
  font-weight: ${fontWeight.medium};
`;

export const StyledEstimateTimeParagraph = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: ${fontWeight.bold};
`;

export const StyledSeparatorLine = styled.div`
  width: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #aaa;
`;

export const StyledContent = styled.div`
  font-size: 18px;
  &::first-letter {
    text-transform: uppercase;
    font-size: 48px;
    font-weight: ${fontWeight.bold};
  }
`;
