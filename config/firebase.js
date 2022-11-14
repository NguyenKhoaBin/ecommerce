import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn28ZuHpbGqVqwSBT1OHFM6LN9BBPCRtY",
  authDomain: "ecommece-83a81.firebaseapp.com",
  projectId: "ecommece-83a81",
  storageBucket: "ecommece-83a81.appspot.com",
  messagingSenderId: "1011956079925",
  appId: "1:1011956079925:web:604f923061f7fbd01ec07c",
  measurementId: "G-ZES060LLGG",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
