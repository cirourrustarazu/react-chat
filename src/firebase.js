// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCqLYMwrPqJUHWZhRzTVzQCbn6bl8XIFY",
  authDomain: "ciro-86c3c.firebaseapp.com",
  projectId: "ciro-86c3c",
  storageBucket: "ciro-86c3c.appspot.com",
  messagingSenderId: "659400512577",
  appId: "1:659400512577:web:8da6a5798d977394f5a2c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);