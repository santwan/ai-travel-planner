// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1hhmWX-RLyOeaC6g_nR0qglp3NjEP65o",
  authDomain: "bhramanguru-4f0d0.firebaseapp.com",
  projectId: "bhramanguru-4f0d0",
  storageBucket: "bhramanguru-4f0d0.appspot.com",
  messagingSenderId: "736839787693",
  appId: "1:736839787693:web:3bf187cf6e1ca373fa5224",
  measurementId: "G-H7F2QQM0VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);