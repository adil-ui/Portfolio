"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firestore = void 0;

var _app = require("firebase/app");

var _firestore = require("firebase/firestore");

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCDECK9uwqkj_LUMyU17qtf1-ZJQsY0a6o",
  authDomain: "portfolio-b626f.firebaseapp.com",
  projectId: "portfolio-b626f",
  storageBucket: "portfolio-b626f.appspot.com",
  messagingSenderId: "18993411145",
  appId: "1:18993411145:web:bd49cf3213bba2b34f3b98",
  measurementId: "G-PR2BKXF1QF"
}; // Initialize Firebase

var app = (0, _app.initializeApp)(firebaseConfig);
var firestore = (0, _firestore.getFirestore)(app);
exports.firestore = firestore;