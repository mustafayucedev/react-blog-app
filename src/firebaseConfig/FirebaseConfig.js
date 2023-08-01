// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyUDonEaVdMMHObLZq4Zy0GAuisOrLwm0",
  authDomain: "blogproject-90250.firebaseapp.com",
  projectId: "blogproject-90250",
  storageBucket: "blogproject-90250.appspot.com",
  messagingSenderId: "1070091420739",
  appId: "1:1070091420739:web:16ccafedc13a7acc8f40f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()