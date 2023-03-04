import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const CreateTodo = async (payload, openNotification) => {
  try {
    const ref = await addDoc(collection(db, "todos"), { ...payload });
    openNotification("success", "Success!", "Todo Created Successfully!");
    return ref.id;
  } catch (e) {
    openNotification(
      "error",
      "Error!",
      e.message || "Todo Created Successfully!"
    );
    return false;
  }
};
