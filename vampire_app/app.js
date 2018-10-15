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
// 1.
Vampire.find({
	gender: 'f'
}, (err, foundVampire) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampire);
	} mongoose.connection.close();
})

// 2.
Vampire.find({
	victims: {$gte: 500}
}, (err, foundVampire) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampire);
	} mongoose.connection.close();
})

// 3.
Vampire.find({
	victims: {$lte: 150}
}, (err, foundVampire) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampire);
	} mongoose.connection.close();
})

// 4.
Vampire.find({
	victims: {$ne: 210234}
}, (err, foundVampire) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampire);
	} mongoose.connection.close();
})

// 5.
Vampire.find({
	$and: [{victims: {$gt: 150}}, {victims: {$lt: 500}}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires);
	} mongoose.connection.close();
})
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// 1.
Vampire.find({
	title: {$exists: true}
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires);
	} mongoose.connection.close();
})

// 2.
Vampire.find({
	victims: {$exists: false}
}, (err, foundVampire) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampire);
	} mongoose.connection.close();
})

// 3.
Vampire.find({
	$and: [{title: {$exists: true}}, {victims: {$exists: false}}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires);
	} mongoose.connection.close();
})

// 4.
Vampire.find({
	$and: [{victims: {$exists: true}}, {victims: {$gt: 1000}}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires);
	} mongoose.connection.close();
})
/////////////////////////////////////////////////
// ### Select with OR
// 1.
Vampire.find({
	$or: [{location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'from NY or New Orleans');
	} mongoose.connection.close();
})

// 2.
Vampire.find({
	$or: [{loves: {$in: ['brooding']}}, {loves: {$in: ['being tragic']}}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'brooding tragics');
	} mongoose.connection.close();
})

// 3.
Vampire.find({
	$or: [{victims: {$gt: 1000}}, {loves: {$in: ['marshmallows']}}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'marshmallow killers');
	} mongoose.connection.close();
})

// 4.
Vampire.find({
	$or: [{hair_color: 'red'}, {eye_color: 'green'}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'red or green');
	} mongoose.connection.close();
})
/////////////////////////////////////////////////
//### Select objects that match one of several values
// 1.
Vampire.find({
	$or: [{loves: {$in: ['frilly shirtsleeves']}}, {loves: {$in: ['frilly collars']}}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'frilly vamps');
	} mongoose.connection.close();
})

// 2.
Vampire.find({
	loves: {$in: ['brooding']}
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'brooders');
	} mongoose.connection.close();
})

// 3.
Vampire.find({
	loves: {$in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']}
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'number 3');
	} mongoose.connection.close();
})

// 4.
Vampire.find({
	$and: [{loves: 'fancy cloaks'}, {loves: {$nin: ['top hats', 'virgin blood']}}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'part 6 question 4');
	} mongoose.connection.close();
})
/////////////////////////////////////////////////
//### Negative Selection
// 1.
Vampire.find({
	$and: [{loves: 'ribbons'}, {eye_color: {$ne: 'brown'}}]
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'part 7 question 1');
	} mongoose.connection.close();
})
// 2.
Vampire.find({
	location: {$nin: ['Rome, Italy']}
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'not from Rome');
	} mongoose.connection.close();
})

// 3.
Vampire.find({
	loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'do not love');
	} mongoose.connection.close();
})

// 4.
Vampire.find({
	victims: {$lte: 200}
}, (err, foundVampires) => {
	if(err) {
		console.log(err);
	} else {
		console.log(foundVampires, 'less than 200 victims');
	} mongoose.connection.close();
})
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
