import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmJaiQ-y7ul6lBhCpqJ452f0C-7gy4wIg",
  authDomain: "socialmedia-a7e46.firebaseapp.com",
  projectId: "socialmedia-a7e46",
  storageBucket: "socialmedia-a7e46.appspot.com",
  messagingSenderId: "1013125728527",
  appId: "1:1013125728527:web:e0878dcbe15774c6aa567a",
  measurementId: "G-FZW4GB1ERN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
