import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDCY2BhNQmxLiW40Oyid2ppTdfF0jeTGbs",
  authDomain: "expensify-app-660b7.firebaseapp.com",
  databaseURL: "https://expensify-app-660b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-app-660b7",
  storageBucket: "expensify-app-660b7.appspot.com",
  messagingSenderId: "213932203582",
  appId: "1:213932203582:web:f81b91cfc39fbeb3edbb6f"
};

// Initialize Firebase v9
const firebaseApp = initializeApp(firebaseConfig)

// const db = firebase.database();
// const db = getDatabase(firebaseApp);
const db = getDatabase();

console.log(db);

set(ref(db), {
  name: 'Jesper Regin',
  age: 50,
  isSingle: false,
  location: {
    city: 'København',
    country: 'Denmark'
  }
});

set(ref(db, 'age'), 34);
set(ref(db, 'location/city'), 'Bagsværd');

set(ref(db, 'attributes'), {
  height: 179,
  weight: 82
});
