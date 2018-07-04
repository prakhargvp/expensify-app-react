// Object Destructuring

// const person = {
// 	name: 'Prakhar',
// 	age: 21,
// 	location: {
// 		city: 'Haridwr',
// 		temp: 23
// 	}
// };

// const { name: firstName = 'Anonymous' , age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if( city && temperature){
// 	console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
// 	title: 'Ego is the Enemy.',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };


// const { title, author } = book;

// const { name: publisherName = 'Self Placed' } = book.publisher;

// console.log(publisherName);


// Array Destructuring
// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennysylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);