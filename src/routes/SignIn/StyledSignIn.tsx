import styled from "@emotion/styled";
import { fontWeight } from "../../constants/styling";

export const StyledContainer = styled.div`
  min-height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormContainer = styled.div`
  box-sizing: border-box;
  display: block;
  width: 350px;
  padding: 16px;
`;

export const StyledBottomSection = styled.div`
  text-align: center;

  & > a {
    font-size: 16px;
    color: black;
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
  }

  & > a.new-account-link {
    font-size: 18px;
  }

  & > a:hover {
    font-weight: ${fontWeight.medium};
  }

  & > h2 {
    font-size: 20px;
  }
`;

export const StyledDivider = styled.hr`
  width: 80%;
  border-top: 1px solid #ddd;
  margin: 16px auto;
`;
