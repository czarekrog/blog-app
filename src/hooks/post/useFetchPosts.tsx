import { collection, getDocs, query } from "firebase/firestore";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../features/postsSlice";
import { firestore } from "../../libs/firebase";
import { Post } from "../../types/Post";

export const useFetchPosts = () => {
  const [postsLoading, setPostsLoading] = useState(false);
  const dispatch = useDispatch();

  const fetch = useCallback(async () => {
    console.log("fetching");
    setPostsLoading(true);
    let posts: Post[] = [];
    const q = query(collection(firestore, "posts"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const post: Post = {
        id: doc.data().id,
        image: doc.data().image,
        title: doc.data().title,
        tags: doc.data().tags,
        shortDesc: doc.data().shortDesc,
        content: doc.data().content,
        author: doc.data().author,
        date: doc.data().date,
        featured: doc.data().featured,
      };
      posts.push(post);
    });

    dispatch(fetchPosts(posts));
    setPostsLoading(false);
  }, [dispatch]);
  return { fetch, postsLoading };
};
