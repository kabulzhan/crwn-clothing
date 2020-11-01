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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
