// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG-G6E_S_Btg9bSx_sRgi9blECcx_IfQ0",
  authDomain: "pruebatecnica2-bbd92.firebaseapp.com",
  projectId: "pruebatecnica2-bbd92",
  storageBucket: "pruebatecnica2-bbd92.appspot.com",
  messagingSenderId: "1055018295414",
  appId: "1:1055018295414:web:28e7b01ee8614b8bf83f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export {
    app,
    db
}