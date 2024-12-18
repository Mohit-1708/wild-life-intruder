// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import Realtime Database functions

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwKM64DWBCVrlre6bHIkTWYHtydYt_mV4",
  authDomain: "wildlife-animal-1c5cf.firebaseapp.com",
  databaseURL: "https://wildlife-animal-1c5cf-default-rtdb.firebaseio.com",
  projectId: "wildlife-animal-1c5cf",
  storageBucket: "wildlife-animal-1c5cf.firebasestorage.app",
  messagingSenderId: "62840922646",
  appId: "1:62840922646:web:4f1e1d94eb23e8b9860b37",
  measurementId: "G-7LSYN85845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Realtime Database instance
const db = getDatabase(app); // Pass the app instance to get the database

// Export the initialized app and db for use in other parts of your app
export { app, db };
