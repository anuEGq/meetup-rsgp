// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvjn39kmgNmdu6LaAFIwxuQIKAOwe0d5c",
  authDomain: "meetup-react-acb2e.firebaseapp.com",
  databaseURL: "https://meetup-react-acb2e-default-rtdb.firebaseio.com",
  projectId: "meetup-react-acb2e",
  storageBucket: "meetup-react-acb2e.appspot.com",
  messagingSenderId: "202630489304",
  appId: "1:202630489304:web:b1b0e74c853b8bb67163ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);