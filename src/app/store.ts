import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import featuredPostsReducer from "../features/featuredPostsSlice";

export const store = configureStore({
  reducer: { featuredPosts: featuredPostsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
