import styled from "@emotion/styled";

interface InsideBoxProps {
  progress: number;
}

export const OutsideBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #eee;
  border-radius: 14px;
  height: 28px;
  width: 200px;
  box-sizing: border-box;
  position: relative;
`;

export const InsideBox = styled.div<InsideBoxProps>`
  background-color: #b1b1b1;
  position: absolute;
  border-radius: 12px;
  top: 4px;
  right: ${(props) => {
    return `${196 - 192 * Math.round(props.progress) * 0.01}px`;
  }};
  bottom: 4px;
  left: 4px;
`;

export const ProgressText = styled.p`
  position: absolute;
  line-height: 28px;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;
