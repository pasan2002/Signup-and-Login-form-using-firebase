// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "add your config from firebase",
  authDomain: "add your config from firebase",
  projectId: "add your config from firebase",
  storageBucket: "add your config from firebase",
  messagingSenderId: "add your config from firebase",
  appId: "add your config from firebase",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}