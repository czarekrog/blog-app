import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import featuredPostsReducer from "../features/featuredPostsSlice";
import postsReducer from "../features/postsSlice";

export const store = configureStore({
  reducer: { featuredPosts: featuredPostsReducer, posts: postsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
