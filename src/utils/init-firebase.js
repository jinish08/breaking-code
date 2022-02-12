// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCK-ilIAWUuOc5PlbRu48OZXQ0QP_zwxk",
  authDomain: "redeem-waste.firebaseapp.com",
  projectId: "redeem-waste",
  storageBucket: "redeem-waste.appspot.com",
  messagingSenderId: "453319239300",
  appId: "1:453319239300:web:2014af662dcd500d5f04d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);