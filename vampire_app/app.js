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

// Vampire.find({gender: 'f'}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({victims: {$gt: 500}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({victims: {$lte: 150}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({victims: {$ne: 210234}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find({title: {$exists: true}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({victims: {$exists: false}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({title: {$exists: true}, victims: {$exists: false}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({victims: {$exists: true, $gt: 1000}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find({$or: [
// 	{location: 'New York, New York, US'}, 
// 	{location: 'New Orleans, Louisiana, US'}
// 	]}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({$or: [
// 	{loves: 'brooding'}, 
// 	{loves: 'being tragic'}
// 	]}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({$or: [
// 	{victims: {$gt: 1000}}, 
// 	{loves: 'marshmallows'}
// 	]}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({$or: [
// 	{hair_color: 'red'}, 
// 	{eye_color: 'green'}
// 	]}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values

// Vampire.find({$or: [
// 	{loves: 'frilly shirtsleeves'}, 
// 	{loves: 'frilly collars'}
// 	]}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({loves: 'brooding'}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({$or: [
// 	{loves: 'appearing innocent'},
// 	{loves: 'trickery'},
// 	{loves: 'lurking in rotting mansions'}, 
// 	{loves: 'R&B music'}
// 	]}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({loves: {$in: 'fancy cloaks', $nin: ['top hats', 'virgin blood']}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

/////////////////////////////////////////////////
//### Negative Selection

// Vampire.find({$and: [
// 	{loves:'ribbons'},
// 	{eye_color: {$ne: 'green'}}]}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({location: {$ne: 'Rome'}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({loves: {$nin: [
// 	'fancy cloaks',
// 	'frilly shirtsleeves',
// 	'appearing innocent',
// 	'being tragic',
// 	'brooding'
// 	]}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

// Vampire.find({victims: {$not: {$gt: 200}}}, (err, foundVamps) => {
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(foundVamps);
// 	}
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

Vampire.updateOne(
	{name: 'Claudia'}, 
	{$set: {name: 'Eve'}, $set: {portrayed_by: 'Tilda Swinton'}}, 
	{new: true}, (err, updatedVamp) => {
	if(err){
		console.log(err);
	}else{
		console.log(updatedVamp);
	}
});

Vampire.findOneAndUpdate(
	{gender: 'm'},
	{$set: {is_secretly:'a were-lizard'}},
	{new: true},
	(err, updatedVamp) => {
		if(err){
			console.log(err);
		}else{
			console.log(updatedVamp);
		}
});

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
