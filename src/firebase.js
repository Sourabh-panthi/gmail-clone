import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVPGfzppWGbSVo2uO7cuRbuE5B0wtm5DY",
  authDomain: "clone-8856f.firebaseapp.com",
  projectId: "clone-8856f",
  storageBucket: "clone-8856f.appspot.com",
  messagingSenderId: "644878179503",
  appId: "1:644878179503:web:50d4406ed9fd7cc394885a",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
