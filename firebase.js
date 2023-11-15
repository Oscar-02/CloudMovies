import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiMT4Tf6uUxp7m0vsRdWhf6pq2lZoAVwo",
  authDomain: "streamnow-603fe.firebaseapp.com",
  projectId: "streamnow-603fe",
  storageBucket: "streamnow-603fe.appspot.com",
  messagingSenderId: "783822555154",
  appId: "1:783822555154:web:4ccd0be4b8ac5d4aecf0cb",
  measurementId: "G-0B5FP979Z9"
};

// Initialize Firebase
export const Firebase_App = initializeApp(firebaseConfig);
export const Firebase_auth = getAuth(Firebase_App);
