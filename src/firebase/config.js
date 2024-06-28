// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtAmcwyg1f99p29LGII1mOVxds1Z1Mmvw",
  authDomain: "coder-chepistacho-react.firebaseapp.com",
  projectId: "coder-chepistacho-react",
  storageBucket: "coder-chepistacho-react.appspot.com",
  messagingSenderId: "855339111370",
  appId: "1:855339111370:web:79a534124c965fcc1b3533"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)