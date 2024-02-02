// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXRr2oEm4Q5fUpxa2TahN47vh-YnbjVpk",
  authDomain: "laundry-app-20511.firebaseapp.com",
  projectId: "laundry-app-20511",
  storageBucket: "laundry-app-20511.appspot.com",
  messagingSenderId: "248118540645",
  appId: "1:248118540645:web:4fac3beda365d54699098c",
  measurementId: "G-3EXB437035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore();
export {auth, db}