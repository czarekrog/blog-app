import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { selectPosts } from "../../../features/postsSlice";
import { SingleRecentPost } from "../SingleRecentPost/SingleRecentPost";
import {
  StyledContainer,
  StyledHeader,
  StyledPostsList,
} from "./StyledRecentPosts";

export const RecentPosts = () => {
  const posts = useSelector((state: RootState) => selectPosts(state));

  const renderRecentPosts = () => {
    return (
      <>
        {posts
          .slice()
          .sort((a, b) => b.date - a.date)
          .map((post) => (
            <SingleRecentPost key={post.id} post={post} />
          ))}
      </>
    );
  };

  return (
    <StyledContainer>
      <StyledHeader>Recent blog posts</StyledHeader>
      <StyledPostsList>{renderRecentPosts()}</StyledPostsList>
    </StyledContainer>
  );
};
