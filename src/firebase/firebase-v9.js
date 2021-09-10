// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

import { initializeApp } from "firebase/app";
import { getFirebase } from 'firebase/firebase-database';

const firebaseConfig = {
  apiKey: "AIzaSyDCY2BhNQmxLiW40Oyid2ppTdfF0jeTGbs",
  authDomain: "expensify-app-660b7.firebaseapp.com",
  databaseURL: "https://expensify-app-660b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-app-660b7",
  storageBucket: "expensify-app-660b7.appspot.com",
  messagingSenderId: "213932203582",
  appId: "1:213932203582:web:f81b91cfc39fbeb3edbb6f"
};

const app = initializeApp(firebaseConfig)

// Initialize Firebase v8
// firebase.initializeApp(firebaseConfig);

const database = getFirebase(app);

database().ref().set({
  name: 'Jesper Regin',
  age: 34,
  isSingle: false,
  location: {
    city: 'København',
    country: 'Denmark'
  }
});

database.ref('age').set(49);
database.ref('location/city').set('Bagsværd');
