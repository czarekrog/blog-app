import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePost } from "../../features/postsSlice";
import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../libs/firebase";
import { useCallback } from "react";

interface RemovePostProps {
  id: string;
}

export const useRemovePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const remove = useCallback(
    async ({ id }: RemovePostProps) => {
      await deleteDoc(doc(firestore, "posts/", "id"));
      dispatch(removePost(id));
      navigate("/dashboard");
    },
    [dispatch, navigate]
  );
  return { remove };
};
