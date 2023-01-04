import { firebaseAuth, firestore } from "../../libs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import checkUsernameAvailable from "../../utils/checkUsernameAvailable";
import { useAlert } from "../alert/useAlert";
import { AlertType } from "../../components/Alert/Alert";
import { UserAccessLevel } from "../../types/UserAccessLevel";

interface SignUpProps {
  email: string;
  password: string;
  name: string;
}

export const useSignUp = () => {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const signUp = async ({ email, password, name }: SignUpProps) => {
    const usernameAvailable = await checkUsernameAvailable({ name });

    if (usernameAvailable) {
      createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then(({ user }) => {
          setDoc(doc(firestore, "users/", user.uid), {
            uid: user.uid,
            name,
            accessLevel: UserAccessLevel.READER,
          });
          navigate("/");
        })
        .catch((error) => {
          showAlert({ code: error.code, type: AlertType.success });
        });
    } else {
    }
  };

  return { signUp };
};
