import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";           
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";    
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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Firebase services
export { auth, db, storage, analytics };
export default app;