import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAesXZhsvNAkt30W7pnEH5VcSx5Axu4QMQ",
  authDomain: "crwn-db-430cb.firebaseapp.com",
  databaseURL: "https://crwn-db-430cb.firebaseio.com",
  projectId: "crwn-db-430cb",
  storageBucket: "crwn-db-430cb.appspot.com",
  messagingSenderId: "410955288431",
  appId: "1:410955288431:web:d451c25f6667a076e2629a",
  measurementId: "G-54TN1JVC1K",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
