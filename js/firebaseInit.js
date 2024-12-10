// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYYAt7AHkkxNeiUM2qvP97IfvX7-4SnIk",
    authDomain: "jit-esh.firebaseapp.com",
    projectId: "jit-esh",
    storageBucket: "jit-esh.firebasestorage.app",
    messagingSenderId: "597421618026",
    appId: "1:597421618026:web:b2b5d25098835a69cfab13",
    measurementId: "G-TEM8C2SC5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
