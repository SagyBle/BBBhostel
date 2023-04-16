// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpd-hGIoAnZhZmQaQ8xlywA2KXsdpWj8o",
  authDomain: "bbb-hostel.firebaseapp.com",
  projectId: "bbb-hostel",
  storageBucket: "bbb-hostel.appspot.com",
  messagingSenderId: "420723225975",
  appId: "1:420723225975:web:c855363962c32cf41bdd72",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
