import styled from "@emotion/styled";
import {
  breakpoints,
  colors,
  fontWeight,
  spacing,
} from "../../../constants/styling";

interface FeaturedPostProps {
  bgImage: string;
  isCurrentSlide: boolean;
}

export const linkStyles = {
  color: `${colors.primary}`,
  textDecoration: "none",
};

export const StyledFeaturedPost = styled.div<FeaturedPostProps>`
  background: url(${(props) => props.bgImage}) rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-blend-mode: multiply;
  height: 100%;
  padding: ${spacing.large};
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  opacity: ${(props) => (props.isCurrentSlide ? 100 : 0)};
  display: ${(props) => (props.isCurrentSlide ? "flex" : "none")};
`;

export const StyledFeaturedSpan = styled.p`
  margin-left: 45px;
  font-size: 18px;
  color: ${colors.light};
  text-decoration: underline;
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 16px;
    font-size: 12px;
  }
`;

export const StyledTitleSpan = styled.span`
  display: block;
  font-size: 36px;
  font-weight: ${fontWeight.bold};
  margin-bottom: 8px;
  color: ${colors.light};
  margin-left: 45px;
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 16px;
    font-size: 20px;
  }
`;

export const StyledDescriptionSpan = styled.span`
  display: block;
  font-size: 18px;
  font-weight: ${fontWeight.medium};
  color: ${colors.light};
  margin-left: 45px;
  margin-bottom: 50px;
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 16px;
    font-size: 14px;
  }
`;
