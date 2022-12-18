import styled from "@emotion/styled";
import { AlertType } from "./Alert";

interface StyleContainerProps {
  isVisible: boolean;
  type: AlertType | null;
}

export const StyledContainer = styled.div<StyleContainerProps>`
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${(props) => (props.type === AlertType.error ? "red" : "green")};
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.type === AlertType.error ? "red" : "green")};
  & > p {
    margin: 0;
  }
`;
