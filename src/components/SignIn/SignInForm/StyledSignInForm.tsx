import styled from "@emotion/styled";
import { borderRadius, colors, fontWeight } from "../../../constants/styling";

export const StyledSignInFormContainer = styled.div`
  width: 300px;
  max-width: 90%;
  padding: 16px;

  & > form > label {
    display: block;
    font-size: 12px;
    font-weight: ${fontWeight.medium};
    margin-bottom: 2px;
  }

  & > form > input {
    display: block;
    margin-bottom: 12px;
    padding: 8px;
    font-size: 18px;
    width: 100%;
    border-radius: ${borderRadius.small};
    border: 1px solid #ddd;
  }

  & > form > button {
    display: block;
    margin: 24px auto;
    border-radius: ${borderRadius.medium};
    border: 1px solid #ddd;
    padding: 8px 32px;
    font-size: 16px;
    font-weight: ${fontWeight.bold};
    cursor: pointer;
    background-color: ${colors.primary};
    color: ${colors.textBright};
    &:hover {
      background-color: ${colors.primaryBrighter};
    }
  }
`;
