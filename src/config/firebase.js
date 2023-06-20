
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD8N3T9-ahQ9-DZVL_TdgIqDp4o9p5i7gA",
  authDomain: "tiktok-clone-dc4f8.firebaseapp.com",
  projectId: "tiktok-clone-dc4f8",
  storageBucket: "tiktok-clone-dc4f8.appspot.com",
  messagingSenderId: "497794957627",
  appId: "1:497794957627:web:efe71bbde380e1c2f7b71e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;