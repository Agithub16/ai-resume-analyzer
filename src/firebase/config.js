import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";           // Authentication ke liye
import { getFirestore } from "firebase/firestore"; // Database ke liye
import { getStorage } from "firebase/storage";     // Resume files ke liye
import { getAnalytics } from "firebase/analytics";    

const firebaseConfig = {
  apiKey: "AIzaSyBFwDh53zMkpjhvh-oLxlRKfE_rFTgCgvU",
  authDomain: "ai-resume-analyzer-76f92.firebaseapp.com",
  projectId: "ai-resume-analyzer-76f92",
  storageBucket: "ai-resume-analyzer-76f92.firebasestorage.app",
  messagingSenderId: "1083722754",
  appId: "1:1083722754:web:df893b02ef6d2eb980ab1b",
  measurementId: "G-4CN8Q9CY8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);