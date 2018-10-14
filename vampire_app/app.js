// 1. Require your node modules
const express = require('express')
const mongoose = require('mongoose')
const app = express();
// 2. Require your model (and possibly your extra data source);
// 3. Connect your database and collection name
const vampireData = require('../vampire_app/populateVampires.js')
// 4. Open your mongoose connection
// const connectionString = 'mongodb://localhost/vampire'
require('../db.js')
// mongoose.connect(connectionString)
const Vampire = require('./models/vampire')
// mongoose.connection.on('connected', () => {
// 	console.log('Mongoose connected to' + connectionString)
// })

// mongoose.connection.on('disconnected', () => {
// 	console.log('Mongoose disconnected')
// })
// console.log(vampireData)
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
// Vampire.collection.insertMany(vampireData,(err, data) => {
// 	Vampire.create({
// 		name: 'Billy',
// 	  hair_color: 'brown',
// 	  eye_color: 'black',
// 	  dob: 12-12-12,
// 	  loves: ['candy', 'cigarettes', 'cows'],
// 	  location: 'Chicago',
// 	  gender: 'male',
// 	  victims: 134
// },
// 		{name: 'Jason',
// 	  hair_color: 'black',
// 	  eye_color: 'green',
// 	  dob: 12-12-12,
// 	  loves: ['carnivals', 'tv', 'fictional creatures'],
// 	  location: 'Canada',
// 	  gender: 'male',
// 	  victims: 678
// },
// 		{name: 'Sally',
// 	  hair_color: 'black',
// 	  eye_color: 'blue',
// 	  dob: 12-12-12,
// 	  loves: ['movies', 'salads', 'coding'],
// 	  location: 'Canada',
// 	  gender: 'male',
// 	  victims: 678
// },
// 		{name: 'Janice',
// 	  hair_color: 'white',
// 	  eye_color: 'yellow',
// 	  dob: 12-12-12,
// 	  loves: ['sleeping', 'eating', 'hiking'],
// 	  location: 'Canada',
// 	  gender: 'male',
// 	  victims: 678
// },
//  (err, createdVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(createdVampire)
// 	}
// })
//     console.log("added provided vampire data")
//     mongoose.connection.close();
  
//   });

/////////////////////////////////////////////////
// ## QUERYING

/////////////////////////////////////////////////
// ### Select by comparison
//all female vampires

// Vampire.find({
// 	gender: 'f'
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundFemale)
// 	}
// })

//greater than 500 

// Vampire.find({
// 	victims: {$gt: 500}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})
//less than or equal to 150 
// Vampire.find({
// 	victims: {$lte: 150}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})
//not equal to
// Vampire.find({
// 	victims: {$ne: 210234}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

// Vampire.find({
// 	victims: {$gt: 150, $lt: 500}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})



/////////////////////////////////////////////////
// ### Select by exists or does not exist
//has a title
// Vampire.find({
// 	title: {$exists: true}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})
//do not have victims 
// Vampire.find({
// 	victims: {$exists: false}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})
//have a title and no victims
// Vampire.find({
// 	title: {$exists: true},
// 	victims: {$exists: false},
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})
//have victims and they are greater than 1000
// Vampire.find({
// 	victims: {$exists: true, $gt: 1000}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({$or: 
// 	[{location: 'New York, New York, US'},
// 	{location: 'New Orleans, Louisiana, US'}
// 	]}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

//loves brooding or being tragic

// Vampire.find({$or: 
// 	[{loves: 'brooding'},
// 	{loves: 'being tragic'}
// 	]}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

//greater than 1000 victims or loves marshmallows

// Vampire.find({$or: 
// 	[{loves: 'marshmallows'},
// 	{victims: {$gt: 1000}}
// 	]}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

//red hair or green eyes

// Vampire.find({$or: 
// 	[{hair_color: 'red'},
// 	{eye_color: 'green'}
// 	]}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})
/////////////////////////////////////////////////
//### Select objects that match one of several values


// love either frilly shirtsleeves or frilly collars
// Vampire.find({$or: 
// 	[{loves: 'frilly shirtsleeves'},
// 	{loves: 'frilly collars'}
// 	]}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})


// love brooding

// Vampire.find({$or: 
// 	[{loves: 'brooding'}
// 	]}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music

// Vampire.find({$or: 
// 	[{loves: 'appearing innocent'},
// 	{loves: 'trickery'},
// 	{loves: 'lurking in rotting mansions'},
// 	{loves: 'R&B music'}
// 	]}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *

Vampire.find({$or: 
	[{loves: 'fancy cloaks'},
	{loves: {$nin: [ 'top hats', 'virgin blood']}}
	]}, (err, foundVampires) => {
	if(err){
		console.log(err)
	} else {
		console.log(foundVampires)
	}
	})

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
