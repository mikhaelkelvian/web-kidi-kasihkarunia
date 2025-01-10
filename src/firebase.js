// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmtA2trqJE7GJhYeSj6JK1PvJD8pcY7IQ",
  authDomain: "kasih-karunia-kidi.firebaseapp.com",
  projectId: "kasih-karunia-kidi",
  storageBucket: "kasih-karunia-kidi.firebasestorage.app",
  messagingSenderId: "450597052434",
  appId: "1:450597052434:web:88b963d3e90a6cb29038cb",
  measurementId: "G-SC38W1H0EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);