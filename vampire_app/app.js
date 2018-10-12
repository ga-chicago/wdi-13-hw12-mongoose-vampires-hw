// 1. Require your node modules
const mongoose = require('mongoose')
// 2. Require your model (and possibly your extra data source);
// 3. Connect your database and collection name
const vampireData = require('../vampire_app/populateVampires.js')
// 4. Open your mongoose connection
// const connectionString = 'mongodb://localhost/vampire'
require('../db.js')
// mongoose.connect(connectionString)
const Vampire = require('../vampire_app/models/vampire.js')
// mongoose.connection.on('connected', () => {
// 	console.log('Mongoose connected to' + connectionString)
// })

// mongoose.connection.on('disconnected', () => {
// 	console.log('Mongoose disconnected')
// })

// mongoose.connection.on('error', (err) => {
// 	console.log(err, 'Mongoose error')
// })

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.create(vampireData, (err, data) => {
// 	console.log('added provided vampire data')
// 	mongoose.connection.close()
// })
// ### Add some new vampire data
// Vampire.create({
// 	name: 'Billy',
// 	  hair_color: 'brown',
// 	  eye_color: 'black',
// 	  dob: 12-12-12,
// 	  loves: ['candy', 'cigarettes', 'cows'],
// 	  location: 'Chicago',
// 	  gender: 'male',
// 	  victims: 134
// }, (err, createdVampire) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(createdVampire)
// 	}
// })
// Vampire.create({
// 	name: 'Josh',
// 	  hair_color: 'brownish',
// 	  eye_color: 'green',
// 	  dob: 12-12-12,
// 	  loves: ['tacos', 'futurama', 'blood'],
// 	  location: 'Geneva',
// 	  gender: 'male',
// 	  victims: 500
// }, (err, createdVampire) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(createdVampire)
// 	}
// })

// Vampire.create({
// 	name: 'Karen',
// 	  hair_color: 'white',
// 	  eye_color: 'red',
// 	  dob: new Date('12-12-12'),
// 	  loves: ['hamsters', 'killing people', 'hand sanitizer'],
// 	  location: 'Rockford',
// 	  gender: 'female',
// 	  victims: 999
// }, (err, createdVampire) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(createdVampire)
// 	}
// })
Vampire.create({
	name: 'Hillary',
	  hair_color: 'black',
	  eye_color: 'green',
	  dob: new Date('12-12-12'),
	  loves: ['eating people', 'killing people', 'cats'],
	  location: 'Washington',
	  gender: 'female',
	  victims: 2
}, (err, createdVampire) => {
	if(err){
		console.log(err)
	} else {
		console.log(createdVampire)
	}
})
// console.log(Vampire.collection)
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
