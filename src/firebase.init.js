// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCVz-BRypjgWdTZxKmFhl9VNUmU42ldR0",
    authDomain: "ema-john-simple-15b09.firebaseapp.com",
    projectId: "ema-john-simple-15b09",
    storageBucket: "ema-john-simple-15b09.appspot.com",
    messagingSenderId: "331846537926",
    appId: "1:331846537926:web:43853d5d59cb76585b3dc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;