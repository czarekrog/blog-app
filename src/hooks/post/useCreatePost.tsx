import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { createPost } from "../../features/postsSlice";
import { firestore, storage } from "../../libs/firebase";
import { useAuth } from "../user/useAuth";
import { useUploadImage } from "./useUploadImage";

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
  const { uploadImage, uploadProgress } = useUploadImage();

  const createNewPost = ({
    image,
    title,
    tags,
    shortDesc,
    content,
    featured,
  }: Props) => {
    if (image === null) return;

    uploadImage(image)
      .then((imageUrl) => {
        const postId = uuidv4();

        const data = {
          id: postId,
          title,
          tags,
          shortDesc,
          content,
          image: imageUrl,
          author: user?.name!,
          date: new Date().getTime(),
          featured: featured,
          comments: [],
        };

        setDoc(doc(firestore, "posts/", postId), data).then(() => {
          dispatch(createPost(data));
        });
      })
      .then(() => navigate("/"));
  };
  return { createNewPost, uploadProgress };
};
