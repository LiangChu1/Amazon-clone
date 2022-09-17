import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAi-kTaQ2kHSKI2hEMpwbVDdA1DXz-vDjs",
    authDomain: "clone-49d41.firebaseapp.com",
    projectId: "clone-49d41",
    storageBucket: "clone-49d41.appspot.com",
    messagingSenderId: "166153658933",
    appId: "1:166153658933:web:45baf6f956aaaafe4e077c",
    measurementId: "G-PJXQQ6J6YC"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};