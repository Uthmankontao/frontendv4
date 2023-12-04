// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATG11VeuL-f6dG8PTkTd_L95Fc0AidD_E",
  authDomain: "smargate-auth.firebaseapp.com",
  projectId: "smargate-auth",
  storageBucket: "smargate-auth.appspot.com",
  messagingSenderId: "372327969035",
  appId: "1:372327969035:web:2386711f3d2751d6b1f20e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);