const person = {
	name: 'Prakhar',
	age: 21,
	location: {
		city: 'Haridwr',
		temp: 23
	}
};

const { name: firstName = 'Anonymous' , age } = person;

console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;

if( city && temperature){
	console.log(`It's ${temperature} in ${city}.`);
}


const book = {
	title: 'Ego is the Enemy.',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};


const { title, author } = book;

const { name: publisherName = 'Self Placed' } = book.publisher;

console.log(publisherName);
