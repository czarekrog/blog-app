import styled from "@emotion/styled";
import { breakpoints } from "../../../constants/styling";

export const StyledContainer = styled.div`
  border: 1px solid #eee;
  margin: 8px auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const StyledImageAndDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin-right: 8px;
  & > img {
    width: 150px;
    height: 100px;
    border-radius: 5px;
    object-fit: cover;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const StyledShortContent = styled.div`
  align-self: flex-start;
  flex: 1;
  box-sizing: border-box;
  padding: 0 8px;
`;

export const StyledFeaturedBadge = styled.div`
  background-color: black;
  color: #fff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  width: fit-content;
  margin-bottom: 4px;
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 4px;
  }
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
  width: 80px;
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

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
    gap: 24px;
  }
`;

export const StyledEditRemoveSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  .icon {
    font-size: 22px;
    color: #393939;
  }

  .fa-trash-can {
    color: red;
    cursor: pointer;
  }
`;
