// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "skill-swap-d6c1c.firebaseapp.com",
  projectId: "skill-swap-d6c1c",
  storageBucket: "skill-swap-d6c1c.firebasestorage.app",
  messagingSenderId: "685628294942",
  appId: "1:685628294942:web:78e904c689d0b93c192b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);