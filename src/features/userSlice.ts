import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";

interface UserState {
  user: User | null;
  success: string;
  error: string;
}

const initialState: UserState = {
  user: null,
  success: "",
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
    handleSuccess: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "forgot-password-success":
          state.success =
            "Ok, we got it! As soon as we find your email address, we will send you a reset link.";
          break;
      }
    },
    handleError: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "auth/wrong-password":
          state.error = "Wrong email or password";
          break;
        case "auth/user-not-found":
          state.error = "Wrong email or password";
          break;
        case "auth/email-already-in-use":
          state.error = "Email already exists";
          break;
        case "username-already-in-use":
          state.error = "Username already exists";
          break;
        default:
          state.error = "Sorry... Unknown error has happened :(";
          break;
      }
    },
    clearAlertInformation: (state) => {
      state.error = "";
      state.success = "";
    },
  },
});

export const {
  signIn,
  signOut,
  handleSuccess,
  handleError,
  clearAlertInformation,
} = userSlice.actions;

//selectors
export const selectUser = (state: UserState) => state.user;
export const selectError = (state: UserState) => state.error;
export const selectSuccess = (state: UserState) => state.success;

export default userSlice.reducer;
