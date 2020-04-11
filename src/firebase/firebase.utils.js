import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useRef } from 'react';

const config ={
    apiKey: "AIzaSyD40Rg4B6LJ_SCiGZphtzeQrJfSASK-hgw",
    authDomain: "crwn-db-yuras007.firebaseapp.com",
    databaseURL: "https://crwn-db-yuras007.firebaseio.com",
    projectId: "crwn-db-yuras007",
    storageBucket: "crwn-db-yuras007.appspot.com",
    messagingSenderId: "597101522194",
    appId: "1:597101522194:web:85217e22b31c396828d7cb"
};

firebase.initializeApp(config);

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
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
