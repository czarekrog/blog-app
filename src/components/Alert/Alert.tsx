import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { selectError, selectSuccess } from "../../features/userSlice";
import { StyledContainer } from "./StyledAlert";

export enum AlertType {
  success,
  error,
}

export const Alert = () => {
  const errorMessage = useSelector((state: RootState) =>
    selectError(state.user)
  );
  const successMessage = useSelector((state: RootState) =>
    selectSuccess(state.user)
  );
  const isVisible = !!errorMessage || !!successMessage;
  const type = errorMessage ? AlertType.error : AlertType.success;
  return (
    <StyledContainer isVisible={isVisible} type={type}>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </StyledContainer>
  );
};
