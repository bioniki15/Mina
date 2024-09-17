import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQsBSN8YzILxisypBxR5gM4cUay8ia8nc",
  authDomain: "bdminadeaco.firebaseapp.com",
  projectId: "bdminadeaco",
  storageBucket: "bdminadeaco.appspot.com",
  messagingSenderId: "291316176572",
  appId: "1:291316176572:web:03a72b021983f14c0e62b9",
  measurementId: "G-LB77VRXWDH"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;