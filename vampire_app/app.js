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
	//res.send('vampire data')
	// console.log("added provided vampire data")
//     mongoose.connection.close();
  
//   });
// 	Vampire.create({
// 		  name: 'Billy',
	// 	  hair_color: 'brown',
	// 	  eye_color: 'black',
	// 	  dob: 12-12-12,
	// 	  loves: ['candy', 'cigarettes', 'cows'],
	// 	  location: 'Chicago',
	// 	  gender: 'male',
	// 	  victims: 134
		// },
	//  (err, createdVampires) => {
	// 	if(err){
	// 		console.log(err)
	// 	} else {
// 		console.log(createdVampire)
// 	}
// })
// // 	Vampire.create({
	// 	  name: 'Janice',
	// 	  hair_color: 'green',
	// 	  eye_color: 'black',
	// 	  dob: 12-12-12,
	// 	  loves: ['chocolate', 'carnivals', 'sadness'],
	// 	  location: 'Chicago',
	// 	  gender: 'female',
	// 	  victims: 400
		// },
	//  (err, createdVampires) => {
	// 	if(err){
	// 		console.log(err)
	// 	} else {
// 		console.log(createdVampire)
// 	}
// })
// // 	Vampire.create({
// 		  name: 'Greg',
	// 	  hair_color: 'brown',
	// 	  eye_color: 'black',
	// 	  dob: 12-12-12,
	// 	  loves: ['hamburgers', 'tacos', 'journalism'],
	// 	  location: 'Chicago',
	// 	  gender: 'male',
	// 	  victims: 999
	// },
	//  (err, createdVampires) => {
	// 	if(err){
	// 		console.log(err)
	// 	} else {
	// 		console.log(createdVampire)
// 	}
// })
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
// 		console.log(foundVampires)
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

// Vampire.find({$and: 
// 	[{loves: 'fancy cloaks'},
// 	{loves: {$nin: [ 'top hats', 'virgin blood']}}
// 	]}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

/////////////////////////////////////////////////
//### Negative Selection

// love ribbons but do not have brown eyes

// Vampire.find({$and: 
// 	[{loves: 'ribbons'},
// 	{eye_color: {$ne: 'brown'}}
// 	]}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

// are not from Rome

// Vampire.find(
// 	{location: {$ne: 'Rome, Italy'}}, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]

// Vampire.find(
// 	{loves: {$nin: ["fancy cloaks","frilly shirtsleeves","appearing innocent","being tragic","brooding"]}}
// 	, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

// have not killed more than 200 people

// Vampire.find({
// 	victims: {$lte: 200}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'



// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

// Remove a single document wherein the hair_color is 'brown'

// Vampire.deleteOne({
// 	hair_color:
// 	{$eq: 'brown'}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.

// Vampire.deleteMany({
// 	eye_color:
// 	{$eq: 'blue'}
// }, (err, foundVampires) => {
// 	if(err){
// 		console.log(err)
// 	} else {
// 		console.log(foundVampires)
// 	}
// 	})

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
