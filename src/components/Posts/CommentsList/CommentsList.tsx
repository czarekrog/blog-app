import { PostComment } from "../../../types/PostComment";
import { Comment } from "../Comment/Comment";
import { StyledCommentsListHeader } from "./StyledCommentsList";

interface Props {
  comments: PostComment[];
}

export const CommentsList = ({ comments }: Props) => {
  return (
    <div>
      <StyledCommentsListHeader>Latest comments:</StyledCommentsListHeader>
      {comments.length === 0 && <p>No comments have been posted yet...</p>}
      {comments.length > 0 &&
        comments
          .slice()
          .sort((a, b) => b.date - a.date)
          .map((comment) => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
};
