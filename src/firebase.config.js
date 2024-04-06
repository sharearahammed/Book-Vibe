// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5oeWOWSUsVSz7QfOmM4TIWkLboHpsoeY",
  authDomain: "book-store-vibe.firebaseapp.com",
  projectId: "book-store-vibe",
  storageBucket: "book-store-vibe.appspot.com",
  messagingSenderId: "181055880585",
  appId: "1:181055880585:web:f5ce317e2e35b20517f558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;