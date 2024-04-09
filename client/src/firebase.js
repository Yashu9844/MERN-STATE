// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-077.firebaseapp.com",
  projectId: "mern-estate-077",
  storageBucket: "mern-estate-077.appspot.com",
  messagingSenderId: "351236636471",
  appId: "1:351236636471:web:e2622b98491779bb2f64b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);