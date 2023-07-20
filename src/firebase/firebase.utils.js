import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBnO1El7R1aG9P6mk10Oehg3lgMpJ6ps0Q",
  authDomain: "crwn-clothing-db-96a0d.firebaseapp.com",
  projectId: "crwn-clothing-db-96a0d",
  storageBucket: "crwn-clothing-db-96a0d.appspot.com",
  messagingSenderId: "692189967877",
  appId: "1:692189967877:web:4d54b32a1ba40def93ce6c",
  measurementId: "G-PH4PBKVXSP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // To force Google to show account selection screen every time user logs in, even if they have already signed up with their email
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
