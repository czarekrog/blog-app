import { useDispatch } from "react-redux";
import { signIn, handleError } from "../../features/userSlice";
import { firebaseAuth } from "../../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import getUserData from "../../utils/getUserData";

interface SignInProps {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInUser = ({ email, password }: SignInProps) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(async ({ user }) => {
        const { name, uid } = await getUserData({ uid: user.uid });
        dispatch(signIn({ uid, name }));
        navigate("/");
      })
      .catch((error) => {
        dispatch(handleError(error.code));
      });
  };

  return { signIn: signInUser };
};
