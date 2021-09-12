const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    reject('Something went wrong');
  }, 3000);
});

console.log('before');


// Promise then = resolve
// Promise catch = reject

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error', error);
});

// Implict catch handler
// promise.then((data) => {
//   console.log('1', data);
// }, (error) => {
//   console.log('error');
// });


console.log('after');