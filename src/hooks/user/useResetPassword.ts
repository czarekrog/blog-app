import { sendPasswordResetEmail } from "firebase/auth";
import { AlertType } from "../../components/Alert/Alert";
import { firebaseAuth } from "../../libs/firebase";
import { useAlert } from "../alert/useAlert";

interface PasswordResetProps {
  email: string;
}

export const useResetPassword = () => {
  const { showAlert } = useAlert();
  const resetPassword = ({ email }: PasswordResetProps) => {
    sendPasswordResetEmail(firebaseAuth, email).finally(() =>
      showAlert({ code: "forgot-password-success", type: AlertType.success })
    );
  };

  return { resetPassword };
};
