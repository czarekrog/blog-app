import { useDispatch } from "react-redux";
import { toggleFeatured } from "../../features/postsSlice";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../libs/firebase";

// Need to get featured too, to simplify the code resposible for toggle in firestore db
interface ToggleFeaturedPostProps {
  id: string;
  featured: boolean;
}

export const useEditPost = () => {
  const dispatch = useDispatch();

  const toggleFeaturedPost = async ({
    id,
    featured,
  }: ToggleFeaturedPostProps) => {
    const ref = doc(firestore, "posts/", id);
    await updateDoc(ref, { featured: !featured });
    dispatch(toggleFeatured(id));
  };
  return { toggleFeaturedPost };
};
