import React from "react";
import { InsideBox, OutsideBox, ProgressText } from "./StyledProgressBar";

interface Props {
  progress: number;
}

export const ProgressBar = ({ progress }: Props) => {
  return (
    <OutsideBox>
      <InsideBox progress={progress}></InsideBox>
      <ProgressText>{Math.round(progress)}%</ProgressText>
    </OutsideBox>
  );
};
