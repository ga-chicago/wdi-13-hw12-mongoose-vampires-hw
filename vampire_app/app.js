// 1. Require your node modules
const mongoose = require('mongoose')

// 2. Require your model (and possibly your extra data source);
const models = require('./models/vampire')
// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampires'

mongoose.connect(connectionString);
// 4. Open your mongoose connection
mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected to ${connectionString}`);
})

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose is connected');
})

mongoose.connection.on('error', (err) => {
	console.log(err, 'mongoose error');
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

const vampireData = require('./populateVampires')

const Vampire = require('./models/vampire')

// Vampire.collection.insertMany(vampireData, (err, data) => {
// 	if(err) { 
// 		console.log(err);
// 	} else {
// 		console.log('added provided vampire data');
// 	}
// })

// ### Add some new vampire data

// Vampire.create(
// {name: 'Ambroze Gaug',
//  hair_color: 'white',
//  eye_color: 'gray',
//  dob: new Date(1640, 4, 15, 6, 45),
//  loves: ['blood', 'death'],
//  location: 'Chicago, Illinois, US',
//  gender: 'm',
//  victims: 24359}, (err, createdVampires) => {
//  	if(err) {
//  		console.log(err);
//  	} else {
//  		console.log(createdVampires);
//  	}
//  })

// Vampire.create(
// {name: 'Marceline The Vampire Queen',
//  hair_color: 'black',
//  eye_color: 'black',
//  dob: new Date(1010, 3, 1, 9, 2),
//  loves: ['playing base', 'Simon'],
//  location: 'Nightosphere',
//  gender: 'f',
//  victims: 500}, (err, createdVampires) => {
//  	if(err) {
//  		console.log(err);
//  	} else {
//  		console.log(createdVampires);
//  	}
//  })

// Vampire.create(
// {name: 'Celine',
//  hair_color: 'black',
//  eye_color: 'electric blue',
//  dob: new Date(1383, 10, 5, 9, 5),
//  loves: ['guns', 'not werewolves'],
//  location: 'Hungary',
//  gender: 'f',
//  victims: 5390}, (err, createdVampires) => {
//  	if(err) {
//  		console.log(err);
//  	} else {
//  		console.log(createdVampires);
//  	}
//  })

// Vampire.create(
// {name: 'Victor',
//  hair_color: 'gray',
//  eye_color: 'electric blue',
//  dob: new Date(400, 4, 8, 1, 25),
//  loves: ['Celine', 'Killing Werewolves'],
//  location: 'Hungary',
//  gender: 'm',
//  victims: 1403249}, (err, createdVampires) => {
//  	if(err) {
//  		console.log(err);
//  	} else {
//  		console.log(createdVampires);
//  	}
//  })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender: 'f'}, (err, foundVampires) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVampires);
// 	}
// })

// Vampire.find({victims: {$gt: 500}}, (err, foundVictims) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVictims);
// 	}
// })

// Vampire.find({victims: {$lte: 150}}, (err, foundVictims) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVictims);
// 	}
// })

// Vampire.find({victims: {$ne: 210234}}, (err, foundVictims) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVictims);
// 	}
// })

// Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, foundVictims) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVictims);
// 	}
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find({title: {$exists: true}}, (err, titleExists) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(titleExists);
// 	}	
// })

// Vampire.find({victims: {$exists: false}}, (err, victimsExists) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(victimsExists);
// 	}	
// })

// Vampire.find({$and: [{victims: {$exists: false}}, {title: {$exists: false}}]}, (err, victimsExists) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(victimsExists);
// 	}	
// })

// Vampire.find({$and: [{victims: {$exists: true}}, {victims: {$gt: 1000}}]}, (err, victimsExists) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(victimsExists);
// 	}	
// })

/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find({$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]}, (err, locationCheck) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(locationCheck);
// 	}	
// })

// Vampire.find({$or: [{loves: 'brooding'}, {loves: 'being tragic'}]}, (err, loveCheck) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(loveCheck);
// 	}	
// })

// Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]}, (err, loveVictimsCheck) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(loveVictimsCheck);
// 	}	
// })

// Vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, (err, loveCheck) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(loveCheck);
// 	}	
// })

/////////////////////////////////////////////////
//### Select objects that match one of several values

// const frilly = ['frilly shirt sleeves', 'frilly collars']
// const brood = ['brooding'];
// const otherLoves = ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']
// const moreLoves = ['fancy cloaks']
// const noLove = ['top hats', 'virgin blood']

// Vampire.find({loves: {$in: frilly}}, (err, vampLoves) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampLoves);
// 	}
// })

// Vampire.find({loves: {$in: brood}}, (err, vampLoves) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampLoves);
// 	}
// })

// Vampire.find({loves: {$in: otherLoves}}, (err, vampLoves) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampLoves);
// 	}
// })

// Vampire.find({loves: {$in: moreLoves, $nin: noLove}}, (err, vampLoves) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampLoves);
// 	}
// })

/////////////////////////////////////////////////
//### Negative Selection

const loves = 'ribbons'
const eyes = 'brown'
const from = 'Rome'
const doesntLove = ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']
// Vampire.find({$and: [{loves: {$in: loves}}, {eye_color: {$ne: 'brown'}}]}, (err, compare) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(compare);
// 	}	
// })

// Vampire.find({location: {$nin: from}}, (err, check) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(check);
// 	}
// })

// Vampire.find({loves: {$nin: doesntLove}}, (err, check) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(check);
// 	}
// })

// Vampire.find({victims: {$lt: 200}}, (err, check) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(check);
// 	}
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

// Vampire.updateOne({name: 'Guy Man'}, {$set: {gender: 'f'}}, {new: true}, (err, updated) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(updated);
// 	}
// })

// Vampire.updateOne({name: 'Eve'}, {$set: {gender: 'm'}}, {new: true}, (err, updated) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(updated);
// 	}
// })

// Vampire.updateOne({name: 'Eve'}, {$rename: {name : moniker}}, (err, updated) => {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(updated);
// }})

// Vampire.updateMany({gender: 'f'}, {gender: 'fems'}, (err, updated) => {
// 		if(err){
// 		console.log(err);
// 	} else {
// 		console.log(updated);
// 	}
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

// Vampire.deleteOne({hair_color: {$eq: 'brown'}}, (err, removed) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(removed);
// 	}
// })

// Vampire.deleteMany({eye_color: {$eq: 'blue'}}, (err, removed) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(removed);
// 	}
// })

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
