// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHLm6RIMeRlt8dqBhOpkLpvaVlNfqLPj0",
  authDomain: "vite-contact-pro.firebaseapp.com",
  projectId: "vite-contact-pro",
  storageBucket: "vite-contact-pro.appspot.com",
  messagingSenderId: "861850833350",
  appId: "1:861850833350:web:380b15f02a6c24e8d562c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)