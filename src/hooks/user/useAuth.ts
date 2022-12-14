import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../libs/firebase";

export const useAuth = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const isAuthenticated = !!user;

  const signOutUser = () => {
    signOut(firebaseAuth);
  };

  return { isAuthenticated, signOut: signOutUser };
};
