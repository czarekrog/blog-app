import moment from "moment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import { AddComment } from "../../components/Posts/AddComment/AddComment";
import { CommentsList } from "../../components/Posts/CommentsList/CommentsList";
import { selectSinglePost } from "../../features/postsSlice";
import { useAuth } from "../../hooks/user/useAuth";
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
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const post = useSelector((state: RootState) => selectSinglePost(state, id!));

  const getReadTime = (): number => {
    const avgReadSpeed = 220;
    const wordCount = post ? post.content.split(" ").length : 0;
    return Math.round((wordCount / avgReadSpeed) * 2) / 2;
  };

  if (!post) {
    return (
      <StyledContainer>
        <p>Loading post...</p>
      </StyledContainer>
    );
  } else {
    return (
      <StyledContainer>
        <StyledHeading bgImage={post.image}>
          <StyledTitle>{post.title}</StyledTitle>
          <StyledAuthorAndDate>
            {post.author} &#183; {moment(post.date).format("DD.MM.YYYY")}
          </StyledAuthorAndDate>
        </StyledHeading>
        <StyledEstimateTimeParagraph>
          Estimated read time: {getReadTime()}{" "}
          {getReadTime() > 1.5 ? "minutes" : "minute"}
        </StyledEstimateTimeParagraph>
        <StyledSeparatorLine />
        <StyledContent>{post.content}</StyledContent>
        {isAuthenticated && <AddComment postId={post.id} />}
        <CommentsList comments={post.comments} />
      </StyledContainer>
    );
  }
};
