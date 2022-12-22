import styled from "@emotion/styled";
import { colors } from "../../constants/styling";

export const StyledTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #eee;

  a {
    color: ${colors.primary};
  }

  a:hover {
    font-weight: 600;
  }
`;
