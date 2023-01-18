import styled from "@emotion/styled";

export const StyledAbout = styled.div`
  text-align: center;
  & > p {
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
`;

export const StyledHeaderImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
`;

export const StyledSignature = styled.p`
  font-weight: 800;
  font-size: 18px;
  text-align: right;
  margin-top: 32px;
`;
