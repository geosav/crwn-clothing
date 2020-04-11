import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
