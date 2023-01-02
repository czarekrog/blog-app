import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../libs/firebase";
import { selectUser } from "../../features/userSlice";

export const useAuth = () => {
  const user = useSelector((state: RootState) => selectUser(state.user));

  const isAuthenticated = !!user;

  const signOutUser = () => {
    signOut(firebaseAuth);
  };

  return { isAuthenticated, signOut: signOutUser, user };
};
