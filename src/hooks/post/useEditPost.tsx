import { useDispatch } from "react-redux";
import { toggleFeatured } from "../../features/postsSlice";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../libs/firebase";
import { v4 as uuidv4 } from "uuid";
import { PostComment } from "../../types/PostComment";
import { useAuth } from "../user/useAuth";
import { addComment } from "../../features/postsSlice";

// Need to get featured too, to simplify the code resposible for toggle in firestore db
interface ToggleFeaturedPostProps {
  id: string;
  featured: boolean;
}

interface CommentPostProps {
  comment: string;
  postId: string;
}

export const useEditPost = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const editPost = () => {};

  const toggleFeaturedPost = async ({
    id,
    featured,
  }: ToggleFeaturedPostProps) => {
    const ref = doc(firestore, "posts/", id);
    await updateDoc(ref, { featured: !featured });
    dispatch(toggleFeatured(id));
  };

  const commentPost = async ({ comment, postId }: CommentPostProps) => {
    const newComment: PostComment = {
      id: uuidv4(),
      comment,
      author: user!.name,
      date: new Date().getTime(),
    };
    const ref = doc(firestore, "posts/", postId);
    await updateDoc(ref, { comments: arrayUnion(newComment) });
    dispatch(addComment({ postId: postId, comment: newComment }));
  };
  return { toggleFeaturedPost, editPost, commentPost };
};
