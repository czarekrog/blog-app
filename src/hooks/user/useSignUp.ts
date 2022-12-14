import { useDispatch } from "react-redux";
import { firebaseAuth, firestore } from "../../libs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { handleError } from "../../features/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import checkUsernameAvailable from "../../utils/checkUsernameAvailable";

interface SignUpProps {
  email: string;
  password: string;
  name: string;
}

export const useSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = async ({ email, password, name }: SignUpProps) => {
    const usernameAvailable = await checkUsernameAvailable({ name });

    if (usernameAvailable) {
      createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(({ user }) => {
          setDoc(doc(firestore, "users/", user.uid), { uid: user.uid, name });
          navigate("/");
        })
        .catch((error) => {
          dispatch(handleError(error.code));
        });
    } else {
      dispatch(handleError("username-already-in-use"));
    }
  };

  return { signUp };
};
