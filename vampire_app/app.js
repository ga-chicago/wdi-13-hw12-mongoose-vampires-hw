// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);

const Vampire = require('./models/vampire.js');

// 3. Connect your database and collection name

const connectionString = 'mongodb://localhost/vampires';

// 4. Open your mongoose connection

mongoose.connect(connectionString);

//connectivity listeners
mongoose.connection.on('connected', () => {
	console.log('mongoose is connected to ' + connectionString);
});

mongoose.connection.on('disconnected', () => {
	console.log('mongoose is disconnected');
});

mongoose.connection.on('error', (err) => {
	console.log(err + '_mongoose error_');
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

const vampireData = require('./populateVampires');

// Vampire.collection.insertMany(vampireData,(err, data)=>{
// 	console.log('added provided vampire data, blehhh');
// })
// ### Add some new vampire data

// Vampire.collection.insertOne({
// 	name: 'David Bowie', 
// 	hair_color: 'blonde', 
// 	eye_color: 'blue', 
// 	dob: 'January 8, 1947', 
// 	loves: ['rock and roll', 'cocaine', 'corn flakes', 'cigarettes', 'outer space'], 
// 	location: 'NYC', 
// 	gender: 'm', 
// 	victims: 1
// 	}, (err, data) => {
// 		console.log('added ' + this.name + ' blehhhh');
// });

// Vampire.collection.insertOne({
// 	name: 'Iggy Pop', 
// 	hair_color: 'blonde', 
// 	eye_color: 'gray', 
// 	dob: 'April 21, 1947', 
// 	loves: ['rock and roll', 'cigarettes', 'life', 'David Bowie'], 
// 	location: 'Detroit', 
// 	gender: 'm', 
// 	victims: 3
// 	}, (err, data) => {
// 		console.log('added ' + this.name + ' blehhhh');
// });

// Vampire.collection.insertOne({
// 	name: 'Tilda Swinton', 
// 	hair_color: 'blonde', 
// 	eye_color: 'blue', 
// 	dob: 'November 5, 1960', 
// 	loves: ['playing the bass', 'full-body prosthetics', 'method acting'], 
// 	location: 'Sweden', 
// 	gender: 'f', 
// 	victims: 2
// 	}, (err, data) => {
// 		console.log('added ' + this.name + ' blehhhh');
// });

// Vampire.collection.insertOne({
// 	name: 'Cher', 
// 	hair_color: 'black', 
// 	eye_color: 'brown', 
// 	dob: 'May 20, 1946', 
// 	loves: ['easy listening', 'slow dancing', 'her own imortality'], 
// 	location: 'Los Angeles', 
// 	gender: 'f', 
// 	victims: 45
// 	}, (err, data) => {
// 		console.log('added ' + this.name + ' blehhhh');
// });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

Vampire.find({gender: 'f'}, (err, foundVamps) => {
	if(err){
		console.log(err);
	}else{
		console.log(foundVamps);
	}
});

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
