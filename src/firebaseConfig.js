// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration (replace with your actual config from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyBTeTPxxK0ckPYnC_1m4qEcX2e08Zx7fos",
    authDomain: "macro-tracker-7e6be.firebaseapp.com",
    projectId: "macro-tracker-7e6be",
    storageBucket: "macro-tracker-7e6be.appspot.com",
    messagingSenderId: "461998072747",
    appId: "1:461998072747:web:f102450f85fdf87e98a8ee"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
