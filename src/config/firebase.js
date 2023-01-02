// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDECK9uwqkj_LUMyU17qtf1-ZJQsY0a6o",
  authDomain: "portfolio-b626f.firebaseapp.com",
  projectId: "portfolio-b626f",
  storageBucket: "portfolio-b626f.appspot.com",
  messagingSenderId: "18993411145",
  appId: "1:18993411145:web:bd49cf3213bba2b34f3b98",
  measurementId: "G-PR2BKXF1QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
