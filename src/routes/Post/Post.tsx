import { useLocation } from "react-router-dom";
import { Post as IPost } from "../../types/Post";
import {
  StyledAuthorAndDate,
  StyledContainer,
  StyledContent,
  StyledEstimateTimeParagraph,
  StyledHeading,
  StyledSeparatorLine,
  StyledTitle,
} from "./StyledPost";

export const Post = () => {
  const location = useLocation();
  const post = location.state.post as IPost;

  const getReadTime = (): number => {
    const avgReadSpeed = 220;
    const wordCount = post.content.split(" ").length;
    return Math.round((wordCount / avgReadSpeed) * 2) / 2;
  };

  return (
    <StyledContainer>
      <StyledHeading bgImage={post.bgImage}>
        <StyledTitle>{post.title}</StyledTitle>
        <StyledAuthorAndDate>Author &#183; Post Date</StyledAuthorAndDate>
      </StyledHeading>
      <StyledEstimateTimeParagraph>
        Estimated read time: {getReadTime()}{" "}
        {getReadTime() > 1.5 ? "minutes" : "minute"}
      </StyledEstimateTimeParagraph>
      <StyledSeparatorLine />
      <StyledContent>{post.content}</StyledContent>
    </StyledContainer>
  );
};
