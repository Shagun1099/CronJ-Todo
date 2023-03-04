import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const ChangeStatus = async (newStatus, todoId, openNotification) => {
  try {
    const docRef = doc(db, "todos", todoId);
    await setDoc(docRef, { status: newStatus }, { merge: true });
    openNotification(
      "success",
      "Success!",
      "Todo's status updated successfully!"
    );
    return true;
  } catch (err) {
    openNotification(
      "error",
      "Error!",
      err.message || "Something might went wrong!"
    );
    return false;
  }
};
