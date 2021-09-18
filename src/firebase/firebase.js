// Connect to Firebase v9 - compat

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

// import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, query, child, onChildAdded, childSnapshot, onChildChanged, onChildRemoved, set, update, remove, onValue, onValueChange, off } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase v9 Compat
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: 'select_account'
});

export { firebase, googleAuthProvider, db as default };

// ----------------------

// // child_removed v8
// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_removed v9 modular
// onChildRemoved(ref(db, 'expenses'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed v9 modular
// onChildChanged(ref(db, 'expenses'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added - also called by existing child nodes!
// db.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added v9 modular
// onChildAdded(ref(db, 'expenses'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// Challenge 2
// const onExpensesChange = db.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// Challenge 2 - v9 modular
// onValue(ref(db, 'expenses'), (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// db.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// db.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// });

// db.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// });

// Challenge v8
// db.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: '108500',
//   createdAt: '234567789'
// });

// Challenge v9 modular
// push(ref(db, 'expenses'), {
//   description: 'Food',
//   note: '',
//   amount: '8500',
//   createdAt: '345678567'
// });


// Push automatically generates a unique ID
// db.ref('notes').push({
//   title: 'Second note',
//   body: 'This is my second note'
// });

// db.ref('notes/-MjQTr7PqFKUup7KEtM0').update({
//   body: 'This is my first note, really'
// });

// const firebaseNotes = {
//   notes: {

//   }
// }

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my first note'
// }, {
//   id: '1761ase',
//   title: 'Second note',
//   body: 'This is my second note'
// }];

// db.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   // console.log(snapshot.val());
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error fetching data', e);
// });

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Jesper Regin',
//   age: 49,
//   stressLevel: 4,
//   job: {
//     title: 'Marketeer',
//     company: 'Supertanker.digital ApS'
//   },
//   location: {
//     city: 'Bagsværd',
//     country: 'Denmark'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

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

// setTimeout(() => {
//   database.ref('age').set(34);
//   database.ref('location/city').set('København');
// }, 5000);

// //Unsubscribe
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7500);

// setTimeout(() => {
//   database.ref('age').set(50);
//   database.ref('location/city').set('Gladsaxe');
// }, 10000);