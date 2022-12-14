import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";

interface UserState {
  user: User | null;
  error: string;
}

const initialState: UserState = {
  user: null,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.error = "";
    },
    signOut: (state) => {
      state.user = null;
      state.error = "";
    },
    handleError: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "auth/invalid-email":
          state.error = "Wrong email or password...";
          break;
        case "auth/wrong-password":
          state.error = "Wrong email or password...";
          break;
        case "auth/email-already-in-use":
          state.error = "Email already in use...";
          break;
        case "username-already-in-use":
          state.error = "Username already taken...";
          break;
        default:
          state.error = "Unknown error occured...";
      }
    },
  },
});

export const { signIn, signOut, handleError } = userSlice.actions;

//selectors
export const selectUser = (state: UserState) => state.user;

export default userSlice.reducer;
