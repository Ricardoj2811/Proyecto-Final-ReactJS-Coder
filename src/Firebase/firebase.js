import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBCYGhcW_a3GRZ90yEyx4rv5D5vHYsMWhA",
    authDomain: "reactproyectofinalcoder.firebaseapp.com",
    projectId: "reactproyectofinalcoder",
    storageBucket: "reactproyectofinalcoder.appspot.com",
    messagingSenderId: "1049222927005",
    appId: "1:1049222927005:web:649c0085de78fdd0917a74"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);