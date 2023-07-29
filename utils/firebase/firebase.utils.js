import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDribFHZyiSBtcWdQ9u3wyiVKbHPdU5Ovk",
  authDomain: "virtuosa-2d771.firebaseapp.com",
  projectId: "virtuosa-2d771",
  storageBucket: "virtuosa-2d771.appspot.com",
  messagingSenderId: "617853178652",
  appId: "1:617853178652:web:d692ca1fa4a373b13c60d9",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
