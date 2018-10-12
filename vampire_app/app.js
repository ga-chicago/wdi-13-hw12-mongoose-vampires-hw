// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire.js');

const vampires = require('./populateVampires.js');

// 3. Connect your database and connection name
const connectionString = 'mongodb://localhost/test';

// 4. Open your mongoose connection
mongoose.connect(connectionString,  {useNewUrlParser: true });

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
	console.log(`Mongoose is disconnected`);
});

mongoose.connection.on('error', (err) => {
	console.log(err, 'Mongoose error');
});

// Made doubles so had to 'reset' and drop collection
// mongoose.connection.collections['vampires'].drop( function(err) {
//     console.log('collection dropped');
// });

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// INSERT USING MONGOOSE

// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampires,(err, data) => {
//     console.log("Added Provided Vampire Data")
//     mongoose.connection.close();
//   });


// ### Add some new vampire data
// Vampire.create({
// 	name: 'Kiss-Shot Acerola-Orion Heart-Under-Blade',
// 	hair_color: 'gold',
// 	eye_color: 'gold',
// 	dob: new Date(1420, 4, 20, 5, 50),
// 	loves: ['doughnuts', 'men in samurai armour'],
// 	location: 'Eikou Cram School',
// 	gender: 'f',
// 	victims: 3759
// 	}, (err, createdVamp) => {
// 		if (err){console.log(err);}
// 		else {console.log("---------- Created VAMP ----------", createdVamp);}
// });

// Vampire.create({
// 	name: 'Lilith Sahl',
// 	hair_color: 'red',
// 	eye_color: 'yellow',
// 	dob: new Date(2085, 9, 26, 23, 22),
// 	loves: ['medicine', 'humans'],
// 	location: 'Rome',
// 	gender: 'f',
// 	victims: 0
// }, (err, createdVamp) => {
// 		if (err){console.log(err);}
// 		else {console.log("---------- Created VAMP ----------", createdVamp);}
// });

// Vampire.create({
// 	name: 'Alucard',
// 	hair_color: 'black',
// 	eye_color: 'red',
// 	dob: new Date(1450, 11, 15, 3, 30),
// 	loves: ['himself', 'Queen Elizabeth II'],
// 	location: 'Vatican',
// 	gender: 'm',
// 	victims: 5284
// }, (err, createdVamp) => {
// 		if (err){console.log(err);}
// 		else {console.log("---------- Created VAMP ----------", createdVamp);}		
// });

// Vampire.create({
// 	name: 'Dio Brando',
// 	hair_color: 'blonde',
// 	eye_color: 'orange',
// 	dob: new Date(1867, 3, 9, 20, 2),
// 	loves: ['red wine', 'reading'],
// 	location: 'Joestar Estate',
// 	gender: 'm',
// 	victims: 1
// }, (err, createdVamp) => {
// 		if (err){console.log(err);}
// 		else {console.log("---------- Created VAMP ----------", createdVamp);}		
// });


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// 1. Find all the vampires that that are females
// Vampire.find({gender: 'f'}, (err, foundFemales) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("---------- foundFemales ---------\n", foundFemales);
// 		}	
// 	}
// );

// 2. Have greater than 500 victims
// Vampire.find({victims: {$gt: 500}}, (err, foundMoreThan500) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("---------- foundMoreThan500 ---------\n", foundMoreThan500);
// 		}	
// 	}
// );

// 3. Have fewer than or equal to 150 victims
// Vampire.find({victims: {$lte: 150}}, (err, foundLessThan150) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("---------- foundLessThan150 ---------\n", foundLessThan150);
// 		}	
// 	}
// );

// 4. Have a victim count is not equal to 210234
// Vampire.find({victims: {$ne: 210234}}, (err, foundNot210234) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("---------- foundNot210234 ---------\n", foundNot210234);
// 		}	
// 	}
// );

// 5. Have greater than 150 AND fewer than 500 victims
// Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, foundBetween150and500) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("---------- foundBetween150and500 ---------\n", foundBetween150and500);
// 		}	
// 	}
// );

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Select all the vampires that:

// 1. Have a title property
// Vampire.find({title: {$exists: true}}, (err, foundHasTitleProp) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ foundHasTitleProp ---------\n", foundHasTitleProp);
// 		}	
// 	}
// );

// 2. Do not have a victims property
// Vampire.find({victims: {$exists: false}}, (err, foundNoVictimsProp) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ foundNoVictimsProp ---------\n", foundNoVictimsProp);
// 		}	
// 	}
// );

// 3. Have a title AND no victims
// Vampire.find({victims: {$exists: false}, title: {$exists: true}}, (err, foundTitleNoVictims) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ foundTitleNoVictims ---------\n", foundTitleNoVictims);
// 		}	
// 	}
// );

// 4. Have victims AND the victims they have are greater than 1000
// Vampire.find({victims: {$exists: true, $gt: 1000}}, (err, foundGT1000Victims) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ foundGT1000Victims ---------\n", foundGT1000Victims);
// 		}	
// 	}
// );



/////////////////////////////////////////////////
// ### Select with OR
// Select all the vampires that:

// 1. Are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({$or:[
// 	{location: 'New York, New York, US'},
// 	{location: 'New Orleans, Louisiana, US'}
// 	]},(err, NYNO) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ NYNO ---------\n", NYNO);
// 		}	
// });

// 2. Love brooding or being tragic
// Vampire.find({$or:[
// 	{loves: 'brooding'},
// 	{loves: 'being tragic'}
// 	]},(err, broodingTragic) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ broodingTragic ---------\n", broodingTragic);
// 		}	
// });

// 3. Have more than 1000 victims or love marshmallows
// Vampire.find({$or:[
// 	{victims: {$gt:1000}},
// 	{loves: 'marshmallows'}
// 	]},(err, victims1000Marsh) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ victims1000Marsh ---------\n", victims1000Marsh);
// 		}	
// });

// 4. Have red hair or green eyes
// Vampire.find({$or:[
// 	{hair_color: 'red'},
// 	{eye_color: 'green'}
// 	]},(err, eyeHairColour) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ eyeHairColour ---------\n", eyeHairColour);
// 		}	
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values
// Select all the vampires that:

// 1. Love either frilly shirtsleeves or frilly collars
// Vampire.find({$or:[
// 	{loves: 'frilly shirtsleeves'},
// 	{loves: 'frilly collars'}
// 	]},(err, lovesFrilly) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ lovesFrilly ------------------\n", lovesFrilly);
// 		}	
// });

// 2. Love brooding
// Vampire.find({loves: 'brooding'},
// 	(err, lovesBrooding) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ lovesBrooding ------------------\n", lovesBrooding);
// 		}	
// });

// 3. Love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find({$or:[
// 	{loves: 'appearing innocent'},
// 	{loves: 'lurking in rotting mansions'},
// 	{loves: 'R&B music'}
// 	]},(err, innocentMansionsRnB) => {
// 		if (err){
// 			console.log(err);
// 		} else {
// 			console.log("------------------------------ innocentMansionsRnB ------------------\n", innocentMansionsRnB);
// 		}	
// });

// 4. Love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
Vampire.find({loves: 'fancy cloaks', loves: {$nin: ['top hats', 'virgin blood']}},
	(err, fancyCloaksNoTopHats) => {
		if (err){
			console.log(err);
		} else {
			console.log("------------------------------ fancyCloaksNoTopHats ------------------\n", fancyCloaksNoTopHats);
		}	
});
// Cannot seem to get the syntax and/or logic right, tried many things^


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
