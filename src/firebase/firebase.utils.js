import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBDDn53dqyrL3P0Yn5b49jL0tbZLScGkv0",
  authDomain: "crwon-dba.firebaseapp.com",
  projectId: "crwon-dba",
  storageBucket: "crwon-dba.appspot.com",
  messagingSenderId: "458229595008",
  appId: "1:458229595008:web:342da8c1519f958cfb9f65",
};

export const createUserProfilDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.messsage);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
