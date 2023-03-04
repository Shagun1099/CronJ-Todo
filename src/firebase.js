import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFkM59Q4aN2RnMikb7n7L28bw-wWhDZYE",
  authDomain: "cronj-todo.firebaseapp.com",
  projectId: "cronj-todo",
  storageBucket: "cronj-todo.appspot.com",
  messagingSenderId: "816577730241",
  appId: "1:816577730241:web:716bd8052ff82942616640",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
