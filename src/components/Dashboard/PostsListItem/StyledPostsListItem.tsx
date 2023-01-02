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
  flex: 1;
`;

export const StyledFeaturedBadge = styled.div`
  background-color: black;
  color: #fff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  width: fit-content;
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
  width: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid #eee;

  & > a {
    color: black;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }

  & > a:hover {
    text-decoration: underline;
  }

  & > p.featured-label {
    font-size: 10px !important;
    font-weight: 600;
  }
`;

export const StyledRemovePostButton = styled.button`
  background: none;
  font-size: 14px;
  font-weight: 600;
  background-color: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
