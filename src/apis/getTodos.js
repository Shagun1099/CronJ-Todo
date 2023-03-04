import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const GetTodos = async () => {
  let todos = [];
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
      todos = [...todos, { ...doc.data(), id: doc.id }];
    });
  } catch (err) {
    console.log(err);
    return [];
  }
  return todos;
};
