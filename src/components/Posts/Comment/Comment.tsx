import moment from "moment";
import React from "react";
import { PostComment } from "../../../types/PostComment";
import {
  StyledComment,
  StyledCommentContent,
  StyledCommentDetails,
} from "./StyledComment";

interface Props {
  comment: PostComment;
}

export const Comment = ({ comment }: Props) => {
  return (
    <StyledComment>
      <StyledCommentContent>{comment.comment}</StyledCommentContent>
      <StyledCommentDetails>
        <span>Author: {comment.author}</span>
        <span>{moment(comment.date).format("HH:mm, DD.MM.YYYY")}</span>
      </StyledCommentDetails>
    </StyledComment>
  );
};
