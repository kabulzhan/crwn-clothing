import { takeLatest, put, all, call, takeLeading } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
} from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, displayName) {
  const additionalData = {
    displayName: displayName,
  };
  try {
    const userRef = yield createUserProfileDocument(userAuth, additionalData);
    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail(emailAndPassword) {
  try {
    const { email, password } = emailAndPassword.payload;
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOut() {
  yield takeLeading(UserActionTypes.SIGN_OUT_START, signOutUser);
}

export function* signUpUser({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user, displayName);
  } catch (e) {
    put(signUpFailure(e));
  }
}

export function* onSignUp() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser);
}

export function* userSagas(args) {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUp),
  ]);
}
