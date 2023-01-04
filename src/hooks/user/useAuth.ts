import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../libs/firebase";
import { selectUser } from "../../features/userSlice";
import { UserAccessLevel } from "../../types/UserAccessLevel";

export const useAuth = () => {
  const user = useSelector((state: RootState) => selectUser(state.user));

  const isAuthenticated = !!user;

  const isAdmin = user?.accessLevel === UserAccessLevel.ADMIN;

  const signOutUser = () => {
    signOut(firebaseAuth);
  };

  return { isAuthenticated, signOut: signOutUser, user, isAdmin };
};
