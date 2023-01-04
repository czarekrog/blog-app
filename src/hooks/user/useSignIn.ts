import { useDispatch } from "react-redux";
import { signIn } from "../../features/userSlice";
import { firebaseAuth } from "../../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import getUserData from "../../utils/getUserData";
import { useAlert } from "../alert/useAlert";
import { AlertType } from "../../components/Alert/Alert";

interface SignInProps {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const signInUser = ({ email, password }: SignInProps) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(async ({ user }) => {
        const { name, uid, accessLevel } = await getUserData({ uid: user.uid });
        dispatch(signIn({ uid, name, accessLevel }));
        navigate("/");
      })
      .catch((error) => {
        // dispatch(handleError(error.code));
        showAlert({ code: error.code, type: AlertType.error });
      });
  };

  return { signIn: signInUser };
};
