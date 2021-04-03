import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA3bPOiiLo5sMdLOXPL0mMHhpHXE7yz52g",
    authDomain: "book-tennis-sofia.firebaseapp.com",
    projectId: "book-tennis-sofia",
    storageBucket: "book-tennis-sofia.appspot.com",
    messagingSenderId: "772883464239",
    appId: "1:772883464239:web:46023d6395e1c49de546da"
};

//if the app is not initialized

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();
