import { useDispatch } from "react-redux";
import { toggleFeatured, updatePost } from "../../features/postsSlice";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../libs/firebase";
import { v4 as uuidv4 } from "uuid";
import { PostComment } from "../../types/PostComment";
import { useAuth } from "../user/useAuth";
import { addComment } from "../../features/postsSlice";
import { useUploadImage } from "./useUploadImage";
import { useNavigate } from "react-router-dom";

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
  const { uploadImage, uploadProgress } = useUploadImage();
  const navigate = useNavigate();

  //helper function to keep the same update "process" for both with and without image update
  const update = (postId: string, updates: object) => {
    const postRef = doc(firestore, "posts/", postId);
    updateDoc(postRef, updates)
      .then(() => dispatch(updatePost({ postId, updates })))
      .then(() => navigate("/"));
  };

  const editPost = async (
    postId: string,
    initialValues: any,
    submittedValues: any
  ) => {
    //Converting objects into arrays to comare values
    const initialValuesArray = Object.entries(initialValues);
    const submittedValuesArray = Object.entries(submittedValues);

    //Comparing values in arrays
    const updatedFieldsArray = submittedValuesArray.filter(
      (item, i) => item[1] !== initialValuesArray[i][1]
    );

    //Converting back to object
    const updatedFieldsObj = updatedFieldsArray.reduce(
      (prev, value) => ({
        ...prev,
        [value[0]]: value[1],
      }),
      {}
    );

    if (updatedFieldsObj.hasOwnProperty("image")) {
      //After checking that the property exists, we can be sure that the file exists in updatedFieldsArray
      const image = submittedValuesArray.find(
        (item) => item[0] === "image"
      )![1] as ArrayBuffer;

      uploadImage(image).then((imageUrl) => {
        const updates = { ...updatedFieldsObj, image: imageUrl };
        update(postId, updates);
      });
    } else {
      const updates = { ...updatedFieldsObj };
      update(postId, updates);
    }
  };

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
  return { toggleFeaturedPost, editPost, commentPost, uploadProgress };
};
