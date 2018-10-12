// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);

const vampireData = require('./populateVampires');
// 3. Connect your database and collection name
const Vampire = require('./models/vampire')
Vampire.collection.insertMany(vampireData, (err, data) => {
	if(err) {
		console.log(err);
	} else {
		console.log(data);
	}
	mongoose.connection.close();
});


// 4. Open your mongoose connection
const connectionString = 'mongodb://localhost/test';

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected on ${connectionString}`);
})

mongoose.connection.on('disconnected', () => {
	console.log(`Mongoose disconnected`);
})

mongoose.connection.on('error', () => {
	console.log('Mongoose error');
})
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.
Vampire.create({
	name: 'Kenneth the Page', 
	hair_color: 'white', 
	eye_color: 'blue',
	dob: new Date(1700, 9, 7),
	loves: ['NBC', 'Mr. Jordan', 'Show business'],
	gender: 'm',
	victims: 100098
}, (err, newVampire) => {
	if(err) {
		console.log(err);
	} else {
		console.log(newVampire);
	} mongoose.connection.close();
})

Vampire.create({
	name: 'Gabe',
	hair_color: 'black',
	eye_color: 'blue',
	dob: new Date(1987, 9, 19),
	loves: ['horror films', 'Sabre', 'anime'],
	gender: 'm',
	victims: 5
}, (err, newVampire) => {
	if(err) {
		console.log(err);
	} else {
		console.log(newVampire);
	} mongoose.connection.close();
})

Vampire.create({
	name: 'Karen',
	hair_color: 'brown',
	eye_color: 'green',
	dob: new Date(1991, 6, 1),
	gender: 'f',
	victims: 10
}, (err, newVampire) => {
	if(err) {
		console.log(err);
	} else {
		console.log(newVampire);
	} mongoose.connection.close()
})

Vampire.create({
	name: 'Kimmy',
	hair_color: 'red',
	eye_color: 'hazel',
	dob: new Date(1986, 12, 2),
	gender: 'f',
	victims: 1
}, (err, newVampire) => {
	if(err) {
		console.log(err);
	} else {
		console.log(newVampire);
	} mongoose.connection.close()
})
// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
