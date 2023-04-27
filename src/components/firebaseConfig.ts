// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjVG-y7fhdeyMetdlHxNG7CrD-4fVXRpQ",
  authDomain: "pricez-b6295.firebaseapp.com",
  projectId: "pricez-b6295",
  storageBucket: "pricez-b6295.appspot.com",
  messagingSenderId: "651506797515",
  appId: "1:651506797515:web:fcb5336ff8ad87bf7a444e",
  measurementId: "G-XZTRXQ1PQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
