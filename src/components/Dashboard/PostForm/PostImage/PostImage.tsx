import { useFormikContext } from "formik";
import { Dispatch, SetStateAction, useState } from "react";
import { StyledInnerContainer, StyledImage } from "./StyledPostImage";

interface Props {
  src: string;
  setPostImage: Dispatch<SetStateAction<string | undefined>>;
}

export const PostImage = ({ src, setPostImage }: Props) => {
  const [showInnerContainer, setShowInnerContainer] = useState(false);
  const handleMouseEnter = () => {
    setShowInnerContainer(true);
  };
  const handleMouseLeave = () => {
    setShowInnerContainer(false);
  };
  const handleClick = () => {
    setPostImage("");
  };

  return (
    <StyledImage
      src={src}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledInnerContainer
        isVisible={showInnerContainer}
        onClick={handleClick}
      >
        <p>Click to remove photo</p>
      </StyledInnerContainer>
    </StyledImage>
  );
};
