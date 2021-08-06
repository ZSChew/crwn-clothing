import { takeLatest, put, all, call } from "@redux-saga/core/effects";

import userActionTypes from "./user.types";

import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const UserSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        id: UserSnapshot.id,
        ...UserSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
