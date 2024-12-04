// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK69raU8NcmVhtrA3yb6eVA8ITJAmUDL8",
  authDomain: "visa-5b94c.firebaseapp.com",
  projectId: "visa-5b94c",
  storageBucket: "visa-5b94c.firebasestorage.app",
  messagingSenderId: "866976880722",
  appId: "1:866976880722:web:5c05abee2f445c8325278b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;