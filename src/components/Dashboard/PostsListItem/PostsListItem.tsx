import { FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useEditPost } from "../../../hooks/post/useEditPost";
import { useRemovePost } from "../../../hooks/post/useRemovePost";
import { Post } from "../../../types/Post";
import {
  StyledContainer,
  StyledDescription,
  StyledFeaturedBadge,
  StyledNavigation,
  StyledRemovePostButton,
  StyledShortContent,
  StyledTitle,
} from "./StyledPostsListItem";

interface Props {
  post: Post;
}

export const PostsListItem = ({ post }: Props) => {
  const { toggleFeaturedPost } = useEditPost();
  const { remove } = useRemovePost();
  const { id, image, title, shortDesc, featured } = post;
  return (
    <StyledContainer>
      <img src={image} alt="Post cover" />
      <StyledShortContent>
        {featured && <StyledFeaturedBadge>FEATURED</StyledFeaturedBadge>}
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{shortDesc}</StyledDescription>
      </StyledShortContent>
      <StyledNavigation>
        <Link to={`edit/${id}`} state={{ post }}>
          Edit
        </Link>
        <StyledRemovePostButton
          className="remove-button"
          onClick={() => remove({ id })}
        >
          Remove post
        </StyledRemovePostButton>
        <Stack direction="row" spacing={1} alignItems="center">
          <Switch
            checked={!!featured}
            onChange={() => toggleFeaturedPost({ id, featured })}
            size="small"
          />
          <Typography className="featured-label">Featured</Typography>
        </Stack>
      </StyledNavigation>
    </StyledContainer>
  );
};
