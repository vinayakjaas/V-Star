// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhcsiHbvUl6OSbHeUYpjOlhmPGKugVacs",
  authDomain: "filmyverse-a358a.firebaseapp.com",
  projectId: "filmyverse-a358a",
  storageBucket: "filmyverse-a358a.appspot.com",
  messagingSenderId: "1090537787402",
  appId: "1:1090537787402:web:336bacf30ebc92dcdd8ff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const movieRef=collection(db,"Movies");
export const reviewsRef=collection(db,'reviews')
export const usersRef=collection(db,'users')

export default app;