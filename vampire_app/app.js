// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire');

// 3. Connect your database and collection name
require('../db');
const vampireData = require('./populateVampires');

// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireData,(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });

// ### Add some new vampire data
// Vampire.create({
// 	name: "Jeff",
// 	hair_color: "brown",
// 	eye_color: "brown",
// 	dob: new Date(1991,1,15,0,0),
// 	loves: ["Lexi","alcohol"],
// 	location: "New York, New York, US",
// 	gender: "m",
// 	title: "Chaz the Heron",
// 	victims: 3
// }, (err, createdVampire) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(createdVampire);
// 		Vampire.create({
// 			name: "Nick",
// 			hair_color: "brown",
// 			eye_color: "brown",
// 			dob: new Date(1990,6,22,3,0),
// 			loves: ["Mia","THC"],
// 			location: "Somerville, Massachusetts, US",
// 			gender: "m",
// 			title: "Konvurt",
// 			victims: 7
// 		}, (err, createdVampire) => {
// 			if(err) {
// 				console.log(err);
// 			} else {
// 				console.log(createdVampire);
// 				Vampire.create({
// 					name: "Mary",
// 					hair_color: "blonde",
// 					eye_color: "blue",
// 					dob: new Date(1992,1,24,0,0),
// 					loves: ["fuzzy animals", "gifts"],
// 					location: "New York, New York, US",
// 					gender: "f",
// 					title: "Marmaduke",
// 					victims: 50
// 				}, (err, createdVampire) => {
// 					if(err) {
// 						console.log(err);
// 					} else {
// 						console.log(createdVampire);
// 						Vampire.create({
// 							name: "Kayla",
// 							hair_color: "black",
// 							eye_color: "brown",
// 							dob: new Date(1989,9,15,3,0),
// 							loves: ["Seth","nerd stuff"],
// 							location: "Somerville, Massachusetts, US",
// 							gender: "f",
// 							title: "Kalyco",
// 							victims: 1
// 						}, (err, createdVampire) => {
// 							if(err) {
// 								console.log(err);
// 							} else {
// 								console.log(createdVampire);
// 							}
// 						})
// 					}
// 				})
// 			}
// 		})
// 	}
// })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender: 'f'}, (err, foundVamps) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVamps);//will return matches as an array
// 	}
// });

// Vampire.find({victims: {$gt: 500}}, (err, foundVamps) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVamps);//will return matches as an array
// 	}
// });

// Vampire.find({victims: {$lte: 150}}, (err, foundVamps) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVamps);//will return matches as an array
// 	}
// });

// Vampire.find({victims: {$ne: 21034}}, (err, foundVamps) => {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(foundVamps);//will return matches as an array
// 	}
// });

Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, foundVamps) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVamps);//will return matches as an array
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
