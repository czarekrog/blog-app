import { query, collection, where, getDocs } from "firebase/firestore";
import { firestore } from "../libs/firebase";
import { User } from "../types/User";

interface Props {
  uid: string;
}

const getUserData = async ({ uid }: Props) => {
  const q = query(collection(firestore, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const user = querySnapshot.docs[0].data() as User;
  return user;
};

export default getUserData;
