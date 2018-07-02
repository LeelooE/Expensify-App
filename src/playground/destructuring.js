
//Object destructuring

// const person = {
//     name: 'Anita',
//     age: 18,
//     location: {
//         city: 'Spokane',
//         temp: 88
//     }
// };

// const {name: firstname = 'Anonymous', age} = person;

// console.log(`${firstname} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature){
// console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


//Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19127'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (Hot)', '$2.00', '2.50', '2.75'];
const[coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);
