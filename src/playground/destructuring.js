//Object destructuring 

// console.log('destructuring');

// const person = {
//     name: 'Andrew',
//     age: 20,
//     location : {
//         city: 'Montreal',
//         temp: 23
//     }
// };

// const {name : firstName="Anonymous", age} = person

// console.log(`${firstName} is ${age}.`);

// const {city, temp:temperature} = person.location

// if(city && temperature) {
// console.log(`it's ${temperature} in ${city}`)
// };

// const book = {

// title: "Ego is the Enemy",
// author: "Ryan Holiday",
// publisher : {
//     name: 'Andrew',
//     }
// };

// const {name : publisheName='self publish'} = book.publisher;

// if (name) {
// console.log(`The publisher name is ${publisheName}`);
// };

//Array destructuring

// const address = ['1299 South Juniper', 'philadelphia', 'Penselvania', '19147'];

// const  [, city= 'Montreal', state='New York'] = address;

// console.log(`you are in ${city} ${state}.`)


const item = ['cofee (iced)', '$3.00', '$3,50', '$3.75'];

const [itemName, , mediumPrice='free'] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);


