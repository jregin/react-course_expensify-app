console.log('destructuring');
//
// Object destructuring {}

// const person = {
//   name: 'Jesper',
//   age: 49,
//   location: {
//     city: 'Bagsværd',
//     temp: 16
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: grader} = person.location;
// if (city && grader) {
//   console.log(`It's ${grader} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(`${publisherName}`);

//
// Array destructuring []

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];
const [itemName, ,mPrice] = item;
console.log(`A Medium ${itemName} costs ${mPrice}`)