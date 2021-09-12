// Connect to Firebase v9 - compat

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, get, query, child, set, update, remove, onValue, onValueChange, off } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDCY2BhNQmxLiW40Oyid2ppTdfF0jeTGbs",
  authDomain: "expensify-app-660b7.firebaseapp.com",
  databaseURL: "https://expensify-app-660b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-app-660b7",
  storageBucket: "expensify-app-660b7.appspot.com",
  messagingSenderId: "213932203582",
  appId: "1:213932203582:web:f81b91cfc39fbeb3edbb6f"
};

// Initialize Firebase v9 Compat
firebase.initializeApp(firebaseConfig);

// const db = firebase.database();

const database = firebase.database();

database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  // console.log(snapshot.val());
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('Error fetching data', e);
});

database.ref('location/city')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('Error fetching data', e);
  });

database.ref().set({
  name: 'Jesper Regin',
  age: 49,
  stressLevel: 4,
  job: {
    title: 'Marketeer',
    company: 'Supertanker.digital ApS'
  },
  location: {
    city: 'Bagsværd',
    country: 'Denmark'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });

setTimeout(() => {
  database.ref('age').set(34);
  database.ref('location/city').set('København');
}, 5000);

//Unsubscribe
setTimeout(() => {
  database.ref().off(onValueChange);
}, 7500);

setTimeout(() => {
  database.ref('age').set(50);
  database.ref('location/city').set('Gladsaxe');
}, 10000);