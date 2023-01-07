import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types/Post";
import { RootState } from "../app/store";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../libs/firebase";
import { PostComment } from "../types/PostComment";

export interface PostsState {
  posts: Post[];
}

interface CommentPayload {
  postId: string;
  comment: PostComment;
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    createPost: (state, action: PayloadAction<Post>) => {
      setDoc(doc(firestore, "posts/", action.payload.id), action.payload);
      state.posts.push(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {},
    toggleFeatured: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload) {
          return { ...post, featured: !post.featured };
        } else {
          return post;
        }
      });
    },
    addComment: (state, action: PayloadAction<CommentPayload>) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            comments: [...post.comments, action.payload.comment],
          };
        } else {
          return post;
        }
      });
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const {
  fetchPosts,
  createPost,
  updatePost,
  toggleFeatured,
  addComment,
  removePost,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export const selectSinglePost = (state: RootState, postId: string) =>
  state.posts.posts.find((post) => post.id === postId);

export const selectFeaturedPosts = (state: RootState) =>
  state.posts.posts.filter((post) => post.featured === true);

export default postsSlice.reducer;
