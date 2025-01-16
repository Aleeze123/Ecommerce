// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQsuekb8TfWnJAXYhdNqTwKw7moflWg-o",
  authDomain: "aiecommerce-7b212.firebaseapp.com",
  projectId: "aiecommerce-7b212",
  storageBucket: "aiecommerce-7b212.firebasestorage.app",
  messagingSenderId: "597530088184",
  appId: "1:597530088184:web:95db8c6807b2585e7da10d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const initFirebase=()=>{
    return app
}