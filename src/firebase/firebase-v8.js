import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDCY2BhNQmxLiW40Oyid2ppTdfF0jeTGbs",
  authDomain: "expensify-app-660b7.firebaseapp.com",
  databaseURL: "https://expensify-app-660b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-app-660b7",
  storageBucket: "expensify-app-660b7.appspot.com",
  messagingSenderId: "213932203582",
  appId: "1:213932203582:web:f81b91cfc39fbeb3edbb6f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

db.ref().set({
  name: 'Jesper Regin',
  age: 34,
  isSingle: false,
  location: {
    city: 'København',
    country: 'Denmark'
  }
});

db.ref('age').set(49);
db.ref('location/city').set('Bagsværd');

db.ref('attributes').set({
  height: 179,
  weight: 82
});