import { Stack, Switch, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useEditPost } from "../../../hooks/post/useEditPost";
import { Post } from "../../../types/Post";
import { RemovePostDialog } from "../../RemovePostDialog/RemovePostDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import {
  StyledContainer,
  StyledDescription,
  StyledEditRemoveSection,
  StyledFeaturedBadge,
  StyledImageAndDescription,
  StyledNavigation,
  StyledShortContent,
  StyledTitle,
} from "./StyledPostsListItem";

interface Props {
  post: Post;
}

export const PostsListItem = ({ post }: Props) => {
  const { toggleFeaturedPost } = useEditPost();
  const { id, image, title, shortDesc, featured } = post;
  return (
    <StyledContainer>
      <StyledImageAndDescription>
        <img src={image} alt="Post cover" />
        <StyledShortContent>
          {featured && <StyledFeaturedBadge>FEATURED</StyledFeaturedBadge>}
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{shortDesc}</StyledDescription>
        </StyledShortContent>
      </StyledImageAndDescription>
      <StyledNavigation>
        <StyledEditRemoveSection>
          <Link to={`edit/${id}`} state={{ post }}>
            <FontAwesomeIcon icon={faPen} className="icon" />
          </Link>
          <RemovePostDialog postId={id} postTitle={title} />
        </StyledEditRemoveSection>
        <Stack direction="column" spacing={1} alignItems="center">
          <Typography fontSize={14}>Featured</Typography>
          <Switch
            checked={!!featured}
            onChange={() => toggleFeaturedPost({ id, featured })}
            size="small"
          />
        </Stack>
      </StyledNavigation>
    </StyledContainer>
  );
};
