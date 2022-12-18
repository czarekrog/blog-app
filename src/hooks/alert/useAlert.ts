import { useDispatch } from "react-redux";
import { AlertType } from "../../components/Alert/Alert";
import {
  clearAlertInformation,
  handleError,
  handleSuccess,
} from "../../features/userSlice";

interface ShowAlertProps {
  code: string;
  type: AlertType;
}

export const useAlert = () => {
  const dispatch = useDispatch();

  const hideAlert = () => {
    setTimeout(() => {
      dispatch(clearAlertInformation());
    }, 4000);
  };

  const showAlert = ({ code, type }: ShowAlertProps) => {
    if (type === AlertType.error) {
      dispatch(handleError(code));
      hideAlert();
    } else {
      dispatch(handleSuccess(code));
      hideAlert();
    }
  };

  return { showAlert };
};
