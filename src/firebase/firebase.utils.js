import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJ1WXie_go_upQp8nQ4clhGRZk7Ci89kk",
    authDomain: "crwn-db-12195.firebaseapp.com",
    projectId: "crwn-db-12195",
    storageBucket: "crwn-db-12195.appspot.com",
    messagingSenderId: "696564579519",
    appId: "1:696564579519:web:2e706a5c21fb5b573b9a0a"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log(firestore.doc('users/b789ecg89we'));
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;