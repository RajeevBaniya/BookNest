// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8fxYVZ-Wr39_Gm9Y9bUQ7guYbkfgF9xA",
  authDomain: "book-store-inventory-9dbd3.firebaseapp.com",
  projectId: "book-store-inventory-9dbd3",
  storageBucket: "book-store-inventory-9dbd3.appspot.com",
  messagingSenderId: "1060188655764",
  appId: "1:1060188655764:web:b035b09b8da325882ea481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;