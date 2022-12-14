import { query, collection, where, getDocs } from "firebase/firestore";
import { firestore } from "../libs/firebase";

interface Props {
  name: string;
}

const checkUsernameAvailable = async ({ name }: Props) => {
  const usersRef = collection(firestore, "/users");
  const q = query(usersRef, where("name", "==", name));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.length === 0;
};

export default checkUsernameAvailable;
