import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { createPost } from "../../features/postsSlice";
import { storage } from "../../libs/firebase";
import { useAuth } from "../user/useAuth";

interface Props {
  image: ArrayBuffer | null;
  title: string;
  tags: string;
  shortDesc: string;
  content: string;
  featured: boolean;
}

export const useCreatePost = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [uploadProgress, setUploadProgress] = useState(0);

  const createNewPost = ({
    image,
    title,
    tags,
    shortDesc,
    content,
    featured,
  }: Props) => {
    if (image === null) return;

    const imageRef = ref(storage, `images/${uuidv4()}`);
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            dispatch(
              createPost({
                id: uuidv4(),
                title,
                tags,
                shortDesc,
                content,
                image: downloadURL,
                author: user?.name!,
                date: new Date().getTime(),
                featured: featured,
                comments: [],
              })
            );
          })
          .then(() => {
            alert("Post has been saved");
            navigate("/");
          });
      }
    );
  };
  return { createNewPost, uploadProgress };
};
