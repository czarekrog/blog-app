import styled from "@emotion/styled";
import { colors, fontWeight, spacing } from "../../../constants/styling";

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
  height: 568px;
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
`;

export const StyledTitleSpan = styled.span`
  display: block;
  font-size: 36px;
  font-weight: ${fontWeight.bold};
  margin-bottom: 8px;
  color: ${colors.light};
  margin-left: 45px;
`;

export const StyledDescriptionSpan = styled.span`
  display: block;
  font-size: 18px;
  font-weight: ${fontWeight.medium};
  color: ${colors.light};
  margin-left: 45px;
  margin-bottom: 16px;
`;
