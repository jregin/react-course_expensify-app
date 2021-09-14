// Connect to Firebase v9 - modular

import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, query, child, set, update, remove, onValue, onValueChange, off } from 'firebase/database';

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

const db = getDatabase(firebaseApp);
// const db = getDatabase();
// const dbRef = ref(db);

// console.log(db);
// console.log(dbRef);

const dbRef = ref(getDatabase());

//Listens to DB
onValue(ref(db), snapshot => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
  console.log('Error fetching data', e);
});

// //Listens to DB - false
// onValue(ref(db, 'location'), snapshot => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error fetching data', e);
// }, {
//   onlyOnce: true
// });

// const valueChange = onValue(ref(db), snapshot => {
//   console.log(snapshot.val());
// });

// //Listens to DB
// onValue(query(dbRef), snapshot => {
//   if (snapshot.exists()) {
//     console.log('Call 1: ', snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// });

// const myCall = onValue(ref(db, 'location'), snapshot => {
//   console.log('MyCall: ', snapshot.val());
// });

// setTimeout(() => {
//   set(ref(db, 'age'), 34);
//   set(ref(db, 'location/city'), 'Gladsaxe');
// }, 5000);

// //Unsubscribe not working ...
// setTimeout(() => {
//   off(myCall, 'value', snapshot);
// }, 10000);

// setTimeout(() => {
//   set(ref(db, 'age'), 49);
//   set(ref(db, 'location/city'), 'Bagsværd');
// }, 15000);

// Not working:
// get(ref(db, 'location'))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// get(child(dbRef, 'location'))
// .then(() => {
//   console.log('I fetched something ...');
// }).catch((e) => {
//   console.log('Data fetch failed', e);
// });

// set(ref(db), {
//   name: 'Jesper Regin',
//   age: 49,
//   stressLevel: 6,
//   job: {
//     title: 'Marketeer',
//     company: 'Google'
//   },
//   location: {
//     city: 'København',
//     country: 'Denmark'
//   }
// }).then(() => {
//   console.log('Data 1 saved');
// }).catch((e) => {
//   console.log('Data 1 save failed', e);
// });

// update(ref(db), {
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('Data updated');
// }).catch((e) => {
//   console.log('Data update failed', e);
// });

// remove(ref(db, 'isSingle'))
//   .then(() => {
//     console.log('Data removed');
//   }).catch((e) => {
//     console.log('Remove data failed', e);
//   });

// Alternative to remove: Set(null)
// set(ref(db, 'isSingle'), null);

// set(ref(db, 'age'), 49);
// set(ref(db, 'location/city'), 'Bagsværd');

// set(ref(db, 'attributes'), {
//   height: 179,
//   weight: 81
// }).then(() => {
//   console.log('Data 2 saved');
// }).catch((e) => {
//   console.log('Data 2 save failed', e);
// });
