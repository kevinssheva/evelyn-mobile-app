// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPlwTjumYpJL1d-sXR-mw5KQGxBnne7dI",
  authDomain: "evelyn-mobile-7fd57.firebaseapp.com",
  projectId: "evelyn-mobile-7fd57",
  storageBucket: "evelyn-mobile-7fd57.appspot.com",
  messagingSenderId: "188572555670",
  appId: "1:188572555670:web:c6b8f3e76f874d8f9725b7",
  measurementId: "G-7380KSGEJ2"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIRESTORE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB };