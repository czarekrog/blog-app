import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../libs/firebase";
import { v4 as uuidv4 } from "uuid";

export const useUploadImage = () => {
  const [uploadProgress, setUploadProgress] = useState(0);

  //Returning image url after upload is successful
  const uploadImage = (image: ArrayBuffer) => {
    return new Promise<string>((resolve, reject) => {
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
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
            resolve(downloadURL)
          );
        }
      );
    });
  };
  return { uploadProgress, uploadImage };
};
