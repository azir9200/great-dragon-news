// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUag7biV0VAHK4FDao2UbNeP03WIspwzg",
  authDomain: "great-dragon-news.firebaseapp.com",
  projectId: "great-dragon-news",
  storageBucket: "great-dragon-news.appspot.com",
  messagingSenderId: "669428673203",
  appId: "1:669428673203:web:d2ca7b733f223d8aa4dec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;