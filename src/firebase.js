import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhjk-C6SY7vvU31w-7-_ooC8UG1x7U2mw",
  authDomain: "carrot-market-db4c6.firebaseapp.com",
  projectId: "carrot-market-db4c6",
  storageBucket: "carrot-market-db4c6.appspot.com",
  messagingSenderId: "174606305649",
  appId: "1:174606305649:web:79a1d2ef869d8fc9054ed0",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
