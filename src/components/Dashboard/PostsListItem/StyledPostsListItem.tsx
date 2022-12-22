import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  border: 1px solid #eee;
  margin: 8px auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;
  & > img {
    width: 150px;
    margin-right: 8px;
    border-radius: 5px;
  }
`;

export const StyledShortContent = styled.div`
  align-self: flex-start;
`;

export const StyledTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const StyledDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 4px 0;
`;

export const StyledNavigation = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #eee;

  & > a {
    color: black;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }

  & > a:hover {
    text-decoration: underline;
  }
`;
