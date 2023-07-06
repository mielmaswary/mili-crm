import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4nVmCn6XP49PQnhKK3AUlgBJcuy1prOQ",
  authDomain: "mili-crm.firebaseapp.com",
  projectId: "mili-crm",
  storageBucket: "mili-crm.appspot.com",
  messagingSenderId: "21917017174",
  appId: "1:21917017174:web:1774c86cf4525330dc47f7",
  measurementId: "G-4TY0LSM2CH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
