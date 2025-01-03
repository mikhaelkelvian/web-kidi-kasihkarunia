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
  apiKey: "AIzaSyC8NxW6A2Nx7qOrpEUqyS6UdFBLVIJ355c",
  authDomain: "kidi-karunia-kasih.firebaseapp.com",
  projectId: "kidi-karunia-kasih",
  storageBucket: "kidi-karunia-kasih.firebasestorage.app",
  messagingSenderId: "467863551925",
  appId: "1:467863551925:web:47966fe973a4ba2d7223fc",
  measurementId: "G-XSHLVXXGDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);