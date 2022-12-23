import styled from "@emotion/styled";

interface StyledImageProps {
  src: string;
}

interface StyledInnerContainerProps {
  isVisible: boolean;
}

export const StyledImage = styled.div<StyledImageProps>`
  background: url(${(props) => props.src});
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
  margin: 16px 0;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const StyledInnerContainer = styled.div<StyledInnerContainerProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
`;
