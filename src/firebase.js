import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKuX7NH0TH8ZEjj6e9tpHC3_rBudTdSfs",
  authDomain: "clone-31d23.firebaseapp.com",
  projectId: "clone-31d23",
  storageBucket: "clone-31d23.appspot.com",
  messagingSenderId: "222188616524",
  appId: "1:222188616524:web:f1eb3c1025f20e256b2de9",
  measurementId: "G-FH7GQ034P0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
