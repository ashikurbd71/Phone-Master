// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzxFe701xb_ACyeurmYZqr0HdBcERLKAU",
  authDomain: "phone-master-7f034.firebaseapp.com",
  projectId: "phone-master-7f034",
  storageBucket: "phone-master-7f034.appspot.com",
  messagingSenderId: "874382591463",
  appId: "1:874382591463:web:79836469d755a8da202942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth