export const baseUrl:string="https://delveng-backend.spoortive.net/en/api/"


import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC4rzP3muv4jQ4GSpK2Rt6rEuYXFiXb4nU",
  authDomain: "xchef-delivery.firebaseapp.com",
  projectId: "xchef-delivery",
  storageBucket: "xchef-delivery.appspot.com",
  messagingSenderId: "14980953271",
  appId: "1:14980953271:web:5c1ced5489396a09854932",
  measurementId: "G-7GQQ5K2CP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}
