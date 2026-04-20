// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIehwK3f0SLYbcDH2s1BgD3DcblkyYt0Q",
  authDomain: "proyecto-2026-1-g1.firebaseapp.com",
  projectId: "proyecto-2026-1-g1",
  storageBucket: "proyecto-2026-1-g1.firebasestorage.app",
  messagingSenderId: "653515923044",
  appId: "1:653515923044:web:408f83c6653acd422e4971"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
