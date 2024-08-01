// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // Importing initializeApp function from Firebase SDK
import { getFirestore } from "firebase/firestore"; // Importing getFirestore function from Firebase Firestore SDK

// Your web app's Firebase configuration
const firebaseConfig = { // Firebase configuration object
  apiKey: "AIzaSyCS3KYi2on4NZ0rUTVVyYsPW6d-3IlxwYY", // API key for Firebase project
  authDomain: "bikecustomer-contact-for-91fd6.firebaseapp.com", // Auth domain for Firebase project
  projectId: "bikecustomer-contact-for-91fd6", // Project ID for Firebase project
  storageBucket: "bikecustomer-contact-for-91fd6.appspot.com", // Storage bucket for Firebase project
  messagingSenderId: "666315279312", // Messaging sender ID for Firebase project
  appId: "1:666315279312:web:9234510d14fc1e1ff407d5" // App ID for Firebase project
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initializing Firebase app with the configuration

// Initialize Firestore
const db = getFirestore(app); // Initializing Firestore instance with the Firebase app

export { app, db }; // Exporting Firebase app and Firestore instance
