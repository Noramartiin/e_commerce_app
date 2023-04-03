// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACAC-mMj9zJhFV8LgL873T43W8T8BxZrw",
  authDomain: "e-commerce-app-db-51786.firebaseapp.com",
  projectId: "e-commerce-app-db-51786",
  storageBucket: "e-commerce-app-db-51786.appspot.com",
  messagingSenderId: "766657959917",
  appId: "1:766657959917:web:d0fb9192fd9c494d8d79e4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);